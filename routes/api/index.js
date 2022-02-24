const router = require("express").Router();
const commentRoutes = require("./comment-routes");
const pizzaRoutes = require("./pizza-routes");

//  comments assocaited with specified pizzas
router.use("/comments", commentRoutes);

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/pizzas", pizzaRoutes);

module.exports = router;
