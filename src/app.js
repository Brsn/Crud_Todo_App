const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
//my middleware through express grabs static file

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
