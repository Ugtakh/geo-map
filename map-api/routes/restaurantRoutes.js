const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
  getNearBranch,
} = require("../controllers/restaurantController");

const router = Router();

router.route("/near").post(getNearBranch);
router.route("/").get(getRestaurants).post(createRestaurant);

module.exports = router;
