package main

import (
	"betterplace/configs"
	"betterplace/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	//run database
	configs.ConnectDB()

	//!Routes
	routes.UserRoute(router)

	router.Run("localhost:3001")
}
