const db = require("../db/models");

// Defining methods for the eventsController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .populate('organizer')
      .populate('attendees')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .populate('organizer')
      .populate('attendees')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addResponse: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, { $push: { responses: req.body }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  viewResponses: function(req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.responses))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
