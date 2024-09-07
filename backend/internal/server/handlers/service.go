package handlers

import "github.com/GenerateNU/cooked/backend/internal/storage"

type Service struct {
	storage.Storage
}

func NewService(storage storage.Storage) *Service {
	return &Service{storage}
}


func (s *Service) GetRecipes(context *fiber.Ctx) error {
	recipes := s.Storage.GetRecipes()
}