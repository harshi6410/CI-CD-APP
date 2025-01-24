const express = require('express');
const app = express();
const deploymentRoutes = require('./routes/deploymentRoutes');

// Using the /api route for deployment-related requests
app.use('/api', deploymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});