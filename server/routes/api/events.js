const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router
  .route("/responses/:id")
  .get(eventsController.viewResponses)
  .put(eventsController.addResponse);

module.exports = router;