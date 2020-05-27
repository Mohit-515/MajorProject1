const express = require('express');
const router = express.Router();

const friendsController = require('../controllers/userfriends_controller');
router.get('/usersfriends', friendsController.usersfriends);

module.exports = router;