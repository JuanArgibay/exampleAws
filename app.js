const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

app.get('/', (req, res) => res.json('Root call successful!'));

app.listen(port, () => { console.log('this seeems te be up & running')})
