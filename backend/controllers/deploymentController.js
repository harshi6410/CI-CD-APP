const Deployment = require('../models/deploymentModel');

// Example controller function
const getDeployments = async (req, res) => {
    try {
        const deployments = await Deployment.find();
        res.json(deployments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDeployments };
