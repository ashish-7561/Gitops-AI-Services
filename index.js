const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    service: "Gitops-AI-Services",
    status: "Online",
    message: "GitOps Pipeline is fully operational!",
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Added '0.0.0.0' to allow the container to be reached by the K8s Service
app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Service running on port ${PORT}`);
});