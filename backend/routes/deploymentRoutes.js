const express = require('express');
const router = express.Router();
const { getDeployments } = require('../controllers/deploymentController');

router.get('/deployments', getDeployments);

module.exports = router;
