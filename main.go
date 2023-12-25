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
	router.GET("/", controllers.GetURL)
	router.POST("/", controllers.AddURL)
	router.Run()
}
