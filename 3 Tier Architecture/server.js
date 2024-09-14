const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors()); // Allow cross-origin requests

const playersSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  age: Number,
}); 

const Player = mongoose.model("cricketPlayer", playersSchema,"cricketPlayers");

const connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ravi:Ravi@createdatabase.29g4i.mongodb.net/ICC?retryWrites=true&w=majority&appName=createDatabase"
    );
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Unable to connect to MongoDB", error);
  }
};

app.get("/getPlayers", async (req, res) => {
  req.query.country
  try {
    let players = await Player.find()
    //.distinct("firstName")
    //.skip(3);
    //.limit(1-8);
    // .sort("id firstName");
    //.and([{ age: 38 },{height:5.2}]);
    //.or([{ age: 38 },{height:5.2}]);
    //.countDocuments();
    //.select("lastName");
    
    

    res.json(players);
    console.log(players);
  } catch (error) {
    console.error("Error fetching players", error);
  }
});

app.listen(1234, () => {
  console.log("Listening on port 1234");
});

connectToMDB();
