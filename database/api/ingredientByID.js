// usage: https://sporkly.azurewebsites.net/api/ingredientByID?id=123
//
// takes an INGREDIENT_ID
// returns all fields for a given ingredient

module.exports = { 
    "get": function (req, res, next) {
        console.log(req.query.id); 
        var query = { 
            sql: 'SELECT INGREDIENT_ID, NAME, DESCRIPTION, CATEGORY, PROTEIN, CARBOHYDRATES, FAT, CALORIES\
                  FROM Ingredient\
                  WHERE INGREDIENT_ID = @id',
            parameters: [ { name: 'id', value: req.query.id } ] 
        }; 


         req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results);
            });
    }
};
