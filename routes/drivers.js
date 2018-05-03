var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://tuonghuynh:tuong123@ds111390.mlab.com:11390/taxiapp", ["drivers"]);

//Get all Single Drivers
router.get("/drivers", function(req, res, next){
	db.drivers.find(function(err, drivers){
		if(err){
			res.send(err);

		}
		res.json(drivers);
	})
}); 

//Get Single Driver
router.get("/driver/:id", function(req, res, next){
    db.drivers.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, driver){
        if (err){
            res.send(err);
        }
        res.send(driver);
    });
});

module.exports = router;
