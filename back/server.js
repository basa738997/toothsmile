import express from "express"
import connectDb from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
import reviewRoute from "./routes/reviewRoutes.js"
import mailRoutes from "./routes/mailRoutes.js"
//cofiguration of dotenv for environment variab
dotenv.config();

connectDb();

const app = express();

app.use(cors())
app.use(express.json())

// api call here nad 


app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/mail",mailRoutes)
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})