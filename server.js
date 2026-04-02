const express = require('express');
const route = require('./src/app/api/contact/route')

const app = express();

app.use(express.json());

app.use('/api/route', route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`it's alive on port ${PORT}`));