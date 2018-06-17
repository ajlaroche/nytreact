const router = require("express").Router();
const request = require("request");

router.route("/:searchTerm/:startYear/:endYear")
.get(function (req, res) {

    request("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=005ffad83ef24e5aa4a4232b7c24957b&q=" + req.params.searchTerm + "&begin_date=" + req.params.startYear + "0101" + "&end_date=" + req.params.endYear + "0101", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const found = JSON.parse(body);
            res.json(found);
            console.log(found);
        } else {
            console.log(error);
            found = {};
        };
    });

});

module.exports = router;