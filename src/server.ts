// console.log("Executed 123")
// import moment from "moment";

// const currenTime = moment().format("YYYY MM DD")
// console.log(currenTime)

// const person: string = "Daniel";
// const count: number = 100 

import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
import app from "./app"

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB succesfully connected")
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function() {
        console.info(`The server is succesfully running at: 
            For Admin: http://localhost:${PORT}/admin
            For Users: http://localhost:${PORT}/login`);
        })
    })
    .catch((err) => console.log("error on connection MongoDB", err))
