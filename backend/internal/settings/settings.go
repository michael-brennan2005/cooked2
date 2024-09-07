package settings

import (
	"os"
	"strconv"
)

type Settings struct {
	Application
	Postgres
}

func Load() (Settings, error) {
	s := Settings{}
	app_port, err := strconv.Atoi(os.Getenv("APP_PORT")) 
	if err != nil {
		return Settings{}, err
	} 
	db_port, err := strconv.Atoi(os.Getenv("DB_PORT"))
	if err != nil {
		return Settings{}, err
	} 
	s.Application = Application{Port: app_port}
	s.Postgres = Postgres{Host: os.Getenv("DB_HOST"), Name: os.Getenv("DB_NAME"), Port: db_port, User: "DB_USER", Password: os.Getenv("DB_PASSWORD")}
	return s, nil 
}
