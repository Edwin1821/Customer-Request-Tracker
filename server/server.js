const express = require('express');
const cors = require('cors');
require('dotenv').config();

const requestRoutes = require('./routes/requestRoutes');

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use('/api/requests', requestRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});