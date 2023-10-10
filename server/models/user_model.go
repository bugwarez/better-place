package models

import (
	"time"
)

type User struct {
	Username   string    `bson:"username,omitempty"`
	Password   string    `bson:"password,omitempty"`
	Name       string    `bson:"name,omitempty"`
	Email      string    `bson:"email,omitempty"`
	Bio        string    `bson:"bio,omitempty"`
	Website    string    `bson:"website,omitempty"`
	Avatar     string    `bson:"avatar,omitempty"`
	Banner     string    `bson:"banner,omitempty"`
	Followers  int       `bson:"followers,omitempty"`
	Following  int       `bson:"following,omitempty"`
	Posts      int       `bson:"posts,omitempty"`
	Likes      int       `bson:"likes,omitempty"`
	Reposts    int       `bson:"reposts,omitempty"`
	IsVerified bool      `bson:"is_verified,omitempty"`
	CreatedAt  time.Time `bson:"created_at,omitempty"`
	UpdatedAt  time.Time `bson:"updated_at,omitempty"`
}
