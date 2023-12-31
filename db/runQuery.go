package db

import (
	"context"
	"url-shortner/initializers"
    "go.mongodb.org/mongo-driver/mongo"
    "log"
    "fmt"
	// "go.mongodb.org/mongo-driver/bson"
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

func FindOneDB(database string, collection string, filter interface{})(*mongo.Cursor, error) {
	client, err := initializers.ConnectMongo()
	usersCollection := client.Database(database).Collection(collection)
	cursor, err := usersCollection.Find(context.TODO(), filter)
	
	fmt.Println("cursor.short_url", cursor)
    if err != nil {
		log.Fatal(err)
		return nil, err
	}
    return cursor, nil
}
