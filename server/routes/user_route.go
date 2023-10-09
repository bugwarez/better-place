package routes

import (
	"betterplace/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.POST("/user", controllers.CreateUser())
	router.GET("/user/:userId", controllers.GetUserById())
	router.PUT("/user/:userId", controllers.UpdateUserById())
	router.DELETE("/user/:userId", controllers.DeleteUserById())
}
