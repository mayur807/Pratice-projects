const tzdb = require('@vvo/tzdb');
console.log(tzdb);

const timeZones = tzdb.getTimeZones();
// console.log("Loaded .;time zones:", timeZones.length); 

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ✅ Serve static files (script.js, styles.css, etc.)
app.use(express.static(path.join(__dirname, 'templates')));

// Send index.html from /templates folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Send timezones JSON
app.get('/timezones', (req, res) => {
  res.json(timeZones);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
