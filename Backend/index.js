import  express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoutes from './route/book.route.js'
import cors from 'cors'
import userRoute from "./route/user.route.js"

const app = express()
app.use(cors())
dotenv.config()

const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("mern project")
});

// connect mongodb

const connectDB = async () =>{
try {
 await   mongoose.connect(`${process.env.mongDB_URI}/BookStore`)
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
app.use("/user", userRoute)

