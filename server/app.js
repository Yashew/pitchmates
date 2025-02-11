import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080
const MONGO_URL = process.env.MONGO_URL 

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
  
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

