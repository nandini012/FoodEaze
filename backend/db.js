const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://routhnandini12:Shonamuni%4012@cluster0.sv5r6fs.mongodb.net/GoFoodMern`;
mongoose.set("strictQuery", true);
module.exports=function(callback) {
   mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---",err);
      else {
        console.log("connected");
        const fetched_data=mongoose.connection.db.collection("foodData2");
        fetched_data.find({}).toArray(async function(err,data){
           const foodCategory=await mongoose.connection.db.collection("foodCategory");
           foodCategory.find({}).toArray(async function(err,CatData){
           callback(err,data,CatData)
           })
        });
      }
    }
  );
};

