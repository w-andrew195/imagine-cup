/* Must drop RecipeIngredient first because of the FK constraints */
DROP TABLE IF EXISTS RecipeIngredient;
DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Ingredient;
DROP TABLE IF EXISTS FoodGroup;

/* Create main recipe table */
CREATE TABLE Recipe (
    RECIPE_ID INTEGER NOT NULL PRIMARY KEY IDENTITY,
    NAME TEXT,
    DESCRIPTION TEXT,
    INSTRUCTIONS TEXT
);


CREATE TABLE FoodGroup (
    FOOD_GROUP_ID INTEGER NOT NULL PRIMARY KEY,
    NAME TEXT NOT NULL
);


/* Create main ingredient table */
CREATE TABLE Ingredient (
    INGREDIENT_ID INTEGER NOT NULL PRIMARY KEY,
    NAME TEXT NOT NULL,
    DESCRIPTION TEXT,
    FOOD_GROUP INTEGER NOT NULL CONSTRAINT FK_FOOD_GROUP FOREIGN KEY REFERENCES FoodGroup(FOOD_GROUP_ID),
    /* UNIT_TYPE to be either { SOLID, LIQUID, OTHER } */
    /* this will simplify localisation in the future */
    UNIT_TYPE VARCHAR(6) NOT NULL, 
    UNIT_OTHER_NAME TEXT,
    /* The following represent grams per 100g of ingredient */
    PROTEIN FLOAT,
    CARBOHYDRATES FLOAT,
    FAT FLOAT,
    CALORIES FLOAT
);


/* Create associative entity set for the many to many relationship between
 * Recipe and Ingredients */
CREATE TABLE RecipeIngredient (
    /* strange MS syntax... */
    INGREDIENT_ID INTEGER NOT NULL CONSTRAINT FK_INGREDIENT_ID FOREIGN KEY REFERENCES Ingredient(INGREDIENT_ID),
    RECIPE_ID INTEGER NOT NULL CONSTRAINT FK_RECIPE_ID FOREIGN KEY REFERENCES Recipe(RECIPE_ID),
    AMOUNT INTEGER,
    PRIMARY KEY (INGREDIENT_ID, RECIPE_ID)
);




/* Insert dummy data */
INSERT INTO FoodGroup (
    FOOD_GROUP_ID,
    NAME
) VALUES
(0100, 'Dairy and Egg Products'),
(0200, 'Spices and Herbs'),
(0300, 'Baby Foods'),
(0400, 'Fats and Oils'),
(0500, 'Poultry Products'),
(0600, 'Soups, Sauces, and Gravies'),
(0700, 'Sausages and Luncheon Meats'),
(0800, 'Breakfast Cereals'),
(0900, 'Fruits and Fruit Juices'),
(1000, 'Pork Products'),
(1100, 'Vegetables and Vegetable Products'),
(1200, 'Nut and Seed Products'),
(1300, 'Beef Products'),
(1400, 'Beverages'),
(1500, 'Finfish and Shellfish Products'),
(1600, 'Legumes and Legume Products'),
(1700, 'Lamb, Veal, and Game Products'),
(1800, 'Baked Products'),
(1900, 'Sweets'),
(2000, 'Cereal Grains and Pasta'),
(2100, 'Fast Foods'),
(2200, 'Meals, Entrees, and Side Dishes'),
(2500, 'Snacks'),
(3500, 'American Indian/Alaska Native Foods'),
(3600, 'Restaurant Foods~');


INSERT INTO Recipe (
    NAME,
    DESCRIPTION
) VALUES
('Chocolate Cake', 'A delicious chocolate cake'),
('Chicken Quesidillas', 'Spicy chicken quesidillas with gluten-free wrap'),
('Sweet and Sour Pork', 'Its both sweet and sour...');

INSERT INTO Ingredient (
    INGREDIENT_ID,
    NAME,
    DESCRIPTION,
    FOOD_GROUP,
    UNIT_TYPE,
    PROTEIN,
    CARBOHYDRATES,
    FAT,
    CALORIES
) VALUES 
(1, 'Pork, lean', 'Lean pork cuts', 1000, 'SOLID',27 , 0, 14, 242),
(2, 'Chicken, breast', 'Raw chicken breast', 500, 'SOLID', 23, 0, 1.2, 110),
(3, 'Milk Chocolate', 'Milk Chocolate', 1900, 'SOLID', 7.7, 59, 30, 535);

INSERT INTO RecipeIngredient (
    INGREDIENT_ID,
    RECIPE_ID,
    AMOUNT
) VALUES
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE 'Pork, lean'),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE 'Sweet and Sour Pork'),
    100
),
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE 'Chicken, breast'),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE 'Chicken Quesidillas'),
    100
),
(
    (SELECT INGREDIENT_ID FROM Ingredient WHERE NAME LIKE 'Milk Chocolate'),
    (SELECT RECIPE_ID FROM Recipe WHERE NAME LIKE 'Chocolate Cake'),
    100
);
