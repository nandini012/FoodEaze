global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})


const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
  res.send("Hello");
});

app.use(express.json())
app.use('/api/auth',require('./Routes/Auth'))
app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});
