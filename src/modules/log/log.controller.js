 import * as logService from "./log.service.js"
 import { insertOneLog } from "./log.service.js"

 export const createCappedCollection= async(req, res ,next)=>{

    try {
        await logService.createCappedCollection()

        return res.status(201).json({ok:1})
    } catch (error) {
        
        return res.status(500).json({message:error.message})
    }
 }



  export const createLog = async(req, res ,next)=>{

    try {
         
        const result = await insertOneLog(req.body)
        return res.status(201).json(result)

        return res.status(201).json({ok:1})
    } catch (error) {
        
        return res.status(500).json({message:error.message})
    }
 }