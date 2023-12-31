package models

type urlData struct {
	id     int
	longURL    string
	shortURL      string
}
type Body struct {
	URL string `json:"url"`
	ID  int    `json:"id"`
}