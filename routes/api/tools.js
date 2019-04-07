const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const cloudinaryVars = require('../../config/keys.js').cloudinary;

const router = express.Router();

// // Set Storage Engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   }
// });

// // Init upload
// const upload = multer({
//   storage: storage
// }).any();

cloudinary.config({
  cloud_name: cloudinaryVars.name,
  api_key: cloudinaryVars.key,
  api_secret: cloudinaryVars.secret
});

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

// @route   POST api/tool
// @desc    Save tool info/images
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const values = Object.values(req.files);
    const promises = values.map(image =>
      cloudinary.uploader.upload(image.path)
    );
    Promise.all(promises).then(results => res.json(results));
    // upload(req, res, err => {
    //   if (err) {
    //     // handle errors
    //   } else {
    //     console.log(req.body);
    //     console.log(req.files);
    //     res.send('test');
    //   }
    // });
    // const toolFields = {};
    // toolFields.user = req.user.id;
    // if (req.body.name) toolFields.name = req.body.name;
    // if (req.body.description) toolFields.description = req.body.description;
    // new Tool(toolFields).save().then(tool => res.json(tool));
  }
);

module.exports = router;
