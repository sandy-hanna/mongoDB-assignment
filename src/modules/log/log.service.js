 
import { getDB } from "../../DB/connection.db.js"

 export const createCappedCollection = async()=>{
    const result = await getDB().createCollection("logs",{
        capped:true,
        size:1048576,
    })

    return result
 }


  export const insertOneLog = async(logData)=>{
     const db = getDB()

     return await db.collection("logs").insertOne(logData)
 }