const express = require("express");
const router = express.Router();

const {getAllProducts,getAllProductsTesting} = require("../controllers/production"); 

router.route("/").get(getAllProducts);
router.route("/about").get(getAllProductsTesting);

module.exports = router;