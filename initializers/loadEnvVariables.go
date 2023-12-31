package initializers

import (
	"fmt"
	"github.com/joho/godotenv"
)

func LoadEnvVariables() {
	err := godotenv.Load()
	fmt.Println(err)
	if err != nil {
		fmt.Println("Error loading env")
	}
}
