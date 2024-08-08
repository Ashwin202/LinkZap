package main

import (
	"url-shortner/controllers"
	"url-shortner/initializers"

	"github.com/gin-gonic/gin"
)

func init() { //loads before main
	initializers.LoadEnvVariables()
	initializers.ConnectMongo()
}

func main() {
	router := gin.Default()
	router.GET("/:url", controllers.GetURL)
	router.POST("/", controllers.AddURL)
	router.GET("/api/url", controllers.GetAllURls)
	router.Run()
}
