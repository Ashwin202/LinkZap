package controllers

import (
	"context"
	"log"
	"url-shortner/db"
	"url-shortner/lib"
	"url-shortner/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func GetURL(c *gin.Context) {
	filter := bson.M{"short_url": c.Param("url")}
	cursor, err := db.FindOneDB("url_shortner", "url", filter)
	var result []bson.M
	if err = cursor.All(context.TODO(), &result); err != nil {
		log.Fatal(err)
	}
	if len(result) > 0 {
		longURL := result[0]["url"].(string)
		clicks := result[0]["clicks"].(int32) + 1
		update := bson.M{"$set": bson.M{"clicks": clicks}}
		_, err = db.UpdateOneDB("url_shortner", "url", filter, update)
		c.JSON(200, gin.H{
			"url": longURL,
			"clicks": clicks,
		})
	} else {
		c.JSON(404, gin.H{
			"error": "URL not found",
		})
	}
}

func AddURL(c *gin.Context) {
	body := models.Body{}
	err := c.BindJSON(&body)
	if err != nil {
		c.JSON(200, gin.H{
			"message": "Error on getting body",
		})
	}
	randomString := lib.GenerateRandomString(10)
	result, _ := db.InsertOneDB("url_shortner", "url", map[string]interface{}{"url": body.URL, "short_url": randomString, "clicks": 0})
	c.JSON(200, gin.H{
		"message": result,
	})
}
