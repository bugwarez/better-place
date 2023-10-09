package models

// import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Username string `bson:"username,omitempty" validate:"required"`
	Email    string `bson:"email,omitempty" validate:"required"`
}
