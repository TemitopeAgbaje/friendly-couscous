
const express = require('express')
const app = express()
const connectDB = require('./knexfile')

const PORT = process.env.PORT || 4500;

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM yourtable';
    connectDB.connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })