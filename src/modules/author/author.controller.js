 import * as authorService from "./author.service.js"
 
   export const createImplicitCollection = async(req, res, next)=>{
    try {
        const{name, nationality} = req.body

        const result = await authorService.createImplicitCollection({
            name,
            nationality
        })

        return res.status(201).json({
            acknowledged: result.acknowledged,
            insertedId: result.insertedId
        })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
   }