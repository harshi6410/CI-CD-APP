// controllers/deploymentController.js
const deploymentModel = require('../models/deploymentModel');  // Import your model

exports.deployApp = (req, res) => {
    // Call the startDeployment function from the model
    deploymentModel.startDeployment();  // Assuming deployment logic is in this function
    res.send('App deployed successfully!');
};
