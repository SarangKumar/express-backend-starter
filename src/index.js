import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import compression from "compression"
import dotenv from "dotenv"
import userRoutes from "../routes/users.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(morgan("tiny")) // Logging
app.use(helmet()) // Security
app.use(cors()) // Enable CORS
app.use(compression()) // Enable Gzip compression
app.use(express.json()) // Parse JSON bodies

// Routes
app.use("/users", userRoutes)

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP" })
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
