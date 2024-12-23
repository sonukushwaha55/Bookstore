import  express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoutes from './route/book.route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from "./route/user.route.js"
import contactRoutes from "./route/contact.route.js"

const app = express()
app.use(cors())
dotenv.config()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.use(express.json())

// connect mongodb

const connectDB = async () =>{
try {
 await   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("mongoDB connected !!");

    app.listen(PORT, () =>{
        console.log(`server is running at port: ${PORT}`);
        
    })
} catch (error) {
    console.log("mongoDB connection error", error)
    process.exit(1)
}
}

connectDB()

// define routes

app.use("/book", bookRoutes)
app.use("/user", userRoutes)
app.use("/contact", contactRoutes)

