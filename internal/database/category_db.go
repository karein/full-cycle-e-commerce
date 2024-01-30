package database

import (
	"database/sql"

	"github.com/karein/full-cycle-e-commerce.git/internal/entity"
)

type CategoryDB struct {
	db *sql.DB
}

/* func (cd *CategoryDB) indica que é um método da struct CategoryDB */
/* GetCategories() nome do método */
/* ([]*entity.Category, error) informações do retorno da função */

func NewCategoryBD(db *sql.DB) *CategoryDB {
	return &CategoryDB{db: db}
}

func (cd *CategoryDB) GetCategories() ([]*entity.Category, error) {
	rows, err := cd.db.Query("SELECT id, name FROM categories")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var categories []*entity.Category
	/* for para add a category do banco na entity */
	for rows.Next() {
		var category entity.Category
		/* scan pega item a item das categories e joga pra variável category */
		/* &category.ID - O Id que está sendo recebido do banco, vai ser jogado para a entity.Category por conta do & */
		/* & informa: pega a var category e altera ela direto na memoria colocando o ID */
		if err := rows.Scan(&category.ID, &category.Name); err != nil {
			return nil, err
		}

		/* pega a &category e adiciona em categories */
		categories = append(categories, &category)
	}

	return categories, nil
}

func (cd *CategoryDB) GetCategory(id string) (*entity.Category, error) {
	var category entity.Category
	err := cd.db.QueryRow("SELECT id, name FROM categories WHERE id = ?", id).Scan(&category.ID, &category.Name)
	if err != nil {
		return nil, err
	}

	return &category, nil
}

func (cd *CategoryDB) CreateCategory(category *entity.Category) (string, error) {
	_, err := cd.db.Exec("INSERT INTO categories (id, name) VALUES (?, ?)", category.ID, category.Name)
	if err != nil {
		return "", err
	}

	return category.ID, nil
}
