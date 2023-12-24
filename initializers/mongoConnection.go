package initializers

import (
	"context"
	"log"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)
var collection *mongo.Collection
var ctx = context.TODO()

func ConnectMongo() (*mongo.Client, error) {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, errorField := mongo.Connect(ctx, clientOptions)
	if errorField != nil {
		log.Fatal(errorField)
		return nil, errorField
	}

	errorField = client.Ping(ctx, nil)
	if errorField != nil {
		log.Fatal(errorField)
		return nil, errorField
	}

	return client, nil
}
