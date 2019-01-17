const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');

const router = express.Router();

// Load Validation

// Load Tool Model
const Tool = require('../../models/Tool');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// @route   GET api/tool/:userID
// @desc    Gets tools owned by user
// @access  Public
router.get('/:userID', (req, res) => {
  const errors = {};
  const userID = req.params.userID;

  Tool.find({ user: userID })
    .then(tools => {
      if (!tools) {
        errors.noprofile = 'There is no user profile that includes this tool';
        res.status(404).json(errors);
      }
      console.log(tools);
      res.json(tools);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/tool/:tool
// @desc    Gets profiles of users that own tool queried
// @access  Public
router.get('/:tool', (req, res) => {
  const errors = {};
  const tool = req.params.tool;

  Profile.find({ tools: req.params.tool })
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There is no user profile that includes this tool';
        res.status(404).json(errors);
      }
      console.log(profiles);
      res.json(profiles);
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;
