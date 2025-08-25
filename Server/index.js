
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import path from "path";
// import morgan from "morgan";

// import category from "./routes/category.js";
// import pet from "./routes/pet.js";
// import adoption from "./routes/adoption.js";

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// // Define __dirname manually for ES Module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// // Middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(express.json());
// app.use(morgan("tiny"));

// //  Static Files
// app.use("/public", express.static(path.join(__dirname, "public")));

// //  Routes
// app.use("/api/category", category);

// app.use("/api/pets", pet);

// app.use('/api/adoption', adoption);

// // ✅ Database & Server
// const PORT = 4000;

// mongoose.connect("mongodb+srv://priyankau7081:Pet123@cluster0.uqbmodq.mongodb.net/Pet_World")
//   .then(() => {
//     console.log("Database connected");
//     app.listen(PORT, () => {
//       console.log("App is running on PORT", PORT);
//     });
//   })
//   .catch((err) => {
//     console.log("Database connection error:", err);
//   });





import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import morgan from "morgan";

import category from "./routes/category.js";
import pet from "./routes/pet.js";
import adoption from "./routes/adoption.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname manually for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// ✅ Full CORS config
app.use(cors({
  origin: "http://localhost:5173",   // your React frontend
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // allow cookies, tokens, etc.
}));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

//  Static Files
app.use("/public", express.static(path.join(__dirname, "public")));

//  Routes
app.use("/api/category", category);
app.use("/api/pets", pet);
app.use('/api/adoption', adoption);

// ✅ Database & Server
const PORT = 4000;

mongoose.connect("mongodb+srv://priyankau7081:Pet123@cluster0.uqbmodq.mongodb.net/Pet_World")
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("App is running on PORT", PORT);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
