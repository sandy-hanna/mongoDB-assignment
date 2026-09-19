 import { getDB } from "../../DB/connection.db.js"

 export const createImplicitCollection = async(authorData)=>{
    const result = await getDB().collection("author").insertOne(authorData)

    return result
 }