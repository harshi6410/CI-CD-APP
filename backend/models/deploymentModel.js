const mongoose = require('mongoose');

const deploymentSchema = new mongoose.Schema({
    name: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Deployment', deploymentSchema);
