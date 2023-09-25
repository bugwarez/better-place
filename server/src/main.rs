use std::{sync::Mutex, fmt::format, path};
use serde::{Serialize, Deserialize};
use actix_web::{get, post,web::{self, Json}, App, HttpRequest, HttpResponse, HttpServer, Responder, Result};

struct AppState{
    app_name: String,
    version: String,
}

struct MutableAppState{
    counter: Mutex<i32>
}

#[derive(Serialize)]
struct MyObj {
    name: String,
    request_count: i32,
}
#[derive(Deserialize)]
struct Info {
    username: String,
}

#[get("/")]
async fn hello(data: web::Data<AppState>) -> impl Responder{
    let app_name: &String = &data.app_name;
    let version: &String = &data.version;
    HttpResponse::Ok().body(format!("Hello World from {app_name} and version: {version}!"))
}

#[get("/details/path/{app_name}/{version}")]
async fn details(path: web::Path<(String, String)>) -> Result<String> {
    let (user_id, friend) = path.into_inner();
    Ok(format!("Welcome Path: {}, user_id {}!", friend, user_id))
}
#[get("/details/query")]
async fn query(info: web::Query<Info>) -> String {
    format!("Welcome {}!", info.username)
}

#[post("/submit")]
async fn submit(info: web::Json<Info>) -> Result<String> {
    Ok(format!("Welcome {}!", info.username))
}

#[post("/echo")]
async fn echo(req_body: String, data: web::Data<MutableAppState>) -> impl Responder{
    let mut counter = data.counter.lock().unwrap();
    *counter += 1;
    let response = MyObj {
        name: String::from("Tunahan"),
        request_count: *counter,
    };
    HttpResponse::Ok().content_type("application/json").json(response)
}

async fn manual_hello(req: HttpRequest) -> impl Responder{
    let to = req.match_info().get("name").unwrap_or("World");
    format!("Hello {}!", &to)
}

#[actix_web::main]
async fn main()-> std::io::Result<()>{
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();


    HttpServer::new(||{
        App::new()
        .app_data(web::Data::new(MutableAppState{
            counter: Mutex::new(0)
        }))
        
        .service(
            web::scope("/api")
            .service(hello)
            .service(echo)
            .service(details)
            .service(query)
            .service(submit)
            .route("/manual_hello", web::get().to(manual_hello))
            
        )
    })
    .bind(("127.0.0.1", 8081))?
    .run()
    .await
}