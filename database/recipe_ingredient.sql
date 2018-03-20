/* This file creates the basic tables for recipies and their constituent
 * ingredients, then populates them with sample data
 * 
 * Usage:       sqlite3 database_file.db
            ->  .read recipe_ingredient.sql
*/

/* Delete existing tables incase a .db file already exists */
DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Ingredient;
DROP TABLE IF EXISTS RecipeIngredient;

/* Create main recipe table */
CREATE TABLE IF NOT EXISTS Recipe (
    RECIPE_ID INTEGER NOT NULL PRIMARY KEY,
    NAME TEXT,
    DESCRIPTION TEXT,
    INSTRUCTIONS TEXT
);

/* Create main ingredient table */
CREATE TABLE IF NOT EXISTS Ingredient (
    INGREDIENT_ID INTEGER NOT NULL PRIMARY KEY,
    NAME TEXT,
    DESCRIPTION TEXT,
    CATEGORY TEXT,
    /* The following represent grams per 100g of ingredient */
    PROTEIN INTEGER,
    CARBOHYDRATES INTEGER,
    FAT INTEGER,
    CALORIES INTEGER
);

/* Create associative entity set for the many to many relationship between
 * Recipe and Ingredients */
CREATE TABLE IF NOT EXISTS RecipeIngredient (
    INGREDIENT_ID INTEGER NOT NULL,
    RECIPE_ID INTEGER NOT NULL,
    AMOUNT INTEGER,
    PRIMARY KEY (INGREDIENT_ID, RECIPE_ID),
    FOREIGN KEY (INGREDIENT_ID) REFERENCES Ingredient (INGREDIENT_ID),
    FOREIGN KEY (RECIPE_ID) REFERENCES Ingredient (RECIPE_ID)
);

/* Insert dummy data */
INSERT INTO Recipe (
    NAME,
    DESCRIPTION
) VALUES
("Chocolate Cake", "A delicious chocolate cake"),
("Chicken Quesidillas", "Spicy chicken quesidillas with gluten-free "),
("Sweet and Sour Pork", "Its both sweet and sour...");

INSERT INTO Ingredient (
    NAME,
    DESCRIPTION,
    CATEGORY,
    PROTEIN,
    CARBOHYDRATES,
    FAT,
    CALORIES
) VALUES 
("Pork, lean", "Lean pork cuts", "MEAT", 27, 0, 14, 242),
("Chicken, breast", "Raw chicken breast", "MEAT", 23, 0, 1.2, 110),
("Milk Chocolate", "Milk Chocolate", "SWEETS", 7.7, 59, 30, 535);

INSERT INTO RecipeIngredient (
    INGREDIENT_ID,
    RECIPE_ID,
    AMOUNT
) VALUES
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE "Pork, lean"),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE "Sweet and Sour Pork"),
    100
),
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE "Chicken, breast"),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE "Chicken Quesidillas"),
    100
),
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE "Milk Chocolate"),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE "Chocolate Cake"),
    100
);
