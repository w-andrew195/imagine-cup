// usage: https://sporkly.azurewebsites.net/api/recipeIngredients?id=123
//
// takes a RECIPE_ID
// returns an array representing the ingredients associated with a recipe

module.exports = { 
    "get": function (req, res, next) {
        console.log(req.query.id); 
        var query = { 
            sql: 'SELECT INGREDIENT_ID, AMOUNT\
                  FROM RecipeIngredient\
                  WHERE RECIPE_ID = @id', 
            parameters: [ { name: 'id', value: req.query.id } ] 
        }; 


         req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results);
            });
    }
};
