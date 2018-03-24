// usage: https://sporkly.azurewebsites.net/api/ingredientSearch?q=apple
// 
// takes a query string
// returns an array of recipe summaries which match a given query
//
// summaries take the form { INGREDIENT_ID, NAME, DESCRIPTION, FOOD_GROUP }

module.exports = { 
    "get": function (req, res, next) {
        console.log(req.query.id); 
        var query = { 
            sql: 'SELECT INGREDIENT_ID, NAME, DESCRIPTION, FOOD_GROUP\
                  FROM Ingredient\
                  WHERE NAME LIKE \'%\' + @q + \'%\'',
            parameters: [ { name: 'q', value: req.query.q } ] 
        }; 


         req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results);
            });
    }
};
