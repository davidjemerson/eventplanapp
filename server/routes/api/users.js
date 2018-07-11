const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/email/:email")
  .get(usersController.findByEmail)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;