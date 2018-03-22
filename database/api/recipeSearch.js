// usage: https://sporkly.azurewebsites.net/api/recipeSearch?q=cake
//
// takes a query string
// returns an array of recipe summaries which match a given query
//
// summaries take the form { RECIPE_ID, NAME, DESCRIPTION }

module.exports = { 
    "get": function (req, res, next) {
        console.log(req.query.id); 
        var query = { 
            sql: 'SELECT RECIPE_ID, NAME, DESCRIPTION\
                  FROM Recipe\
                  WHERE NAME LIKE \'%\' + @q + \'%\'',
            parameters: [ { name: 'q', value: req.query.q } ] 
        }; 


         req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results);
            });
    }
};
