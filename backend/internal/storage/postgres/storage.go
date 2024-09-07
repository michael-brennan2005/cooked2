package postgres

import (
	_ "database/sql"

	"github.com/GenerateNU/cooked/backend/internal/settings"
	"github.com/GenerateNU/cooked/backend/internal/types"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type DB struct {
	db *sqlx.DB
}

// TODO: implement connecting
func New(settings settings.Postgres) *DB {
	return &DB{db: sqlx.MustConnect("postgres", settings.Connection())}
}

func (db *DB) Ping() error {
	return db.db.Ping()
}

// TODO: implement the necessary queries to satisfy the storage.Storage interface

func (db *DB) GetRecipes() ([]types.Recipe, error) {
	var recipes []types.Recipe

	err := db.db.Select(&recipes, "SELECT * FROM recipes")
	if err != nil {
		return nil, err
	}
	return recipes, nil
}

func (db *DB) CreateRecipe(recipe types.Recipe) (types.Recipe, error) {
	if _, err := db.db.Exec(
		`INSERT INTO recipes (id, name, cook_duration, instructions, image_url, meal) VALUES ($1, $2, $3, $4, $5, $6)`,
		recipe.ID, recipe.Name, recipe.Cook, recipe.Instructions, recipe.ImageURL, recipe.Meal,
	); err != nil {
		return types.Recipe{}, err
	}
	return recipe, nil
}
