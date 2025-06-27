const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Message = require("./models/Message");
require("dotenv").config();

app.use(express.static("public"));

app.use(cors());
app.use(express.json());


app.post("/send", async (req, res) => {
  const { text } = req.body
  const newMessage = new Message({ text })
  await newMessage.save();
  res.status(200).json({ message: "MESSAGE SAVED" })
})

app.get("/receive", async (req, res) => {
const messages = await Message.find();
res.status(200).json(messages);


})

app.get("/get-password", (req, res) => {
  res.json({ password: process.env.WEB_PASSWORD });
});


mongoose.connect(process.env.MONGO_URI)


  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

