package main

import (
"github.com/gin-gonic/gin"
"url-shortner/initializers"
"url-shortner/db"
"go.mongodb.org/mongo-driver/bson"
)

func init(){ //loads before main
    initializers.LoadEnvVariables()
    initializers.ConnectMongo()
}

func main(){
    userData := bson.D{{"fullName", "User 1"}, {"age", 30}}
    router := gin.Default()
    router.GET("/", func (c *gin.Context){
        result, _ := db.InsertOneDB("ashwin","go", userData)
        c.JSON(200, gin.H{
            "message":result,
        })
    })
    router.Run()
}