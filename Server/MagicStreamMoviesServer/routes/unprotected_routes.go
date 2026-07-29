package routes

import (
	controller "github.com/diamond22233/MagicStreamMovies/Server/MagicStreamMoviesServer/controllers"
	"go.mongodb.org/mongo-driver/v2/mongo"

	"github.com/gin-gonic/gin"
)

func SetupUnProtectedRoutes(router *gin.Engine, client *mongo.Client) {

	router.POST("/register", controller.RegisterUser(client))
	router.POST("/login", controller.LoginUser(client))
	router.GET("/movies", controller.GetMovies(client))
	router.POST("/logout", controller.LogoutHandler(client))
	router.GET("/genres", controller.GetGenres(client))
	router.POST("/refresh", controller.RefreshTokenHandler(client))
}
