// usage: https://sporkly.azurewebsites.net/api/recipeByID?id=123
//
// takes a RECIPE_ID
// returns all fields for a given recipe

module.exports = { 
    "get": function (req, res, next) {
        console.log(req.query.id); 
        var query = { 
            sql: 'SELECT RECIPE_ID, NAME, DESCRIPTION, INSTRUCTIONS\
                  FROM Recipe\
                  WHERE RECIPE_ID = @id',
            parameters: [ { name: 'id', value: req.query.id } ] 
        }; 


         req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results);
            });
    }
};
