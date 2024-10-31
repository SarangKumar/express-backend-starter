import express from "express"
import dotenv from "dotenv"
import connectDB from "../config/database.js"
import userRoutes from "../routes/api/users.js"

dotenv.config()

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(express.json())

// Define routes
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
