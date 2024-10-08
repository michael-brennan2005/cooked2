package storage

import "github.com/GenerateNU/cooked/backend/internal/types"

// TODO: add the necessary queries
type Storage interface {
	Ping() error

	GetRecipes() ([]types.Recipe, error)
	CreateRecipe(recipe types.Recipe) (types.Recipe, error)
}
