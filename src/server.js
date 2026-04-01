const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`it's alive on port ${PORT}`));