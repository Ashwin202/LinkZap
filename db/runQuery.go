package db

import (
	"context"
	"url-shortner/initializers"
    "go.mongodb.org/mongo-driver/mongo"
    "log"
)

func InsertOneDB(database string, collection string, data interface{})(*mongo.InsertOneResult, error) {
	client, err := initializers.ConnectMongo()
	usersCollection := client.Database(database).Collection(collection)
	result, err := usersCollection.InsertOne(context.TODO(), data)
    if err != nil {
		log.Fatal(err)
		return nil, err
	}
    return result, nil
}
