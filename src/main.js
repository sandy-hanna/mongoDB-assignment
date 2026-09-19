 import express from "express"
 import { connectDB } from "./DB/connection.db.js"


import bookRouter from "./modules/book/index.js"
import authorRouter from "./modules/author/index.js"
import logRouter from "./modules/log/index.js"




 const app = express()

app.use(express.json())

app.use("/collection", bookRouter)
app.use("/", authorRouter)
app.use("/", logRouter)
app.use("/", bookRouter)

 
connectDB().then(()=>{
    app.listen(3000,()=>{
    console.log(`application is running on port 3000`)
 })
})
 