package controllers

import (
	// "fmt"
	"log"
	"context"
	"url-shortner/db"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)
// type URLData struct {
// 	ID       string `json:"id" bson:"id"`
// 	URL      string `json:"url" bson:"url"`
// 	ShortURL string `json:"short_url" bson:"short_url"`
// }

func GetURL(c *gin.Context) {
    filter := bson.M{"short_url": c.Param("url")}
	cursor, err := db.FindOneDB("url_shortner", "url", filter)
	var result []bson.M
	if err = cursor.All(context.TODO(), &result); err != nil {
	  log.Fatal(err)
	}
	if len(result) > 0 {
        logURL := result[0]["url"].(string)
        c.JSON(200, gin.H{  
            "url": logURL,
        })
    } else {
        c.JSON(404, gin.H{
            "error": "URL not found",
        })
    }
}

func AddURL(c *gin.Context) {
	result, _ := db.InsertOneDB("ashwin", "go", "userData")
	c.JSON(200, gin.H{
		"message": &result,
        
	})
}
