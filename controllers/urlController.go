package controllers

import (
	"fmt"
	"url-shortner/db"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func GetURL(c *gin.Context) {
	userData := bson.D{{"fullName", "User 1"}, {"age", 30}}
	result, _ := db.InsertOneDB("ashwin", "go", userData)
	fmt.Println(&c)
	c.JSON(200, gin.H{
		"message": &result,
	})
}

func AddURL(c *gin.Context) {
	result, _ := db.InsertOneDB("ashwin", "go", "userData")
	c.JSON(200, gin.H{
		"message": &result,
	})
}
