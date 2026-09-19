import {createBooksCollectionService,  findBooksAggregate4Service,  insertOneDocument, updateOneDoument} from "./book.service.js"
import {createBookIndexService} from "./book.service.js"
import { insertManyBatchDocuments } from "./book.service.js"
import { findOneBook } from "./book.service.js"
import { findBooksByYearRange } from "./book.service.js"
import { findBookByGenre } from "./book.service.js"
import { getBooksSkipLimit } from "./book.service.js"
import { findBooksByYearType } from "./book.service.js"
import { findBooksExcludeGenres } from "./book.service.js"
import { deleteBooksBeforeYearService } from "./book.service.js"
import { findBooksAggregateService } from "./book.service.js"
import { findBooksAggregate2Service } from "./book.service.js"
import { findBooksAggregate3Service } from "./book.service.js"





export const createBooksCollection = async(req, res)=>{
    try {
         await createBooksCollectionService() // بنطلب من السيرفس تنفذ امر الداتابيز و نستناها لما تخلص
         return res.status(201).json({ok:1})

    } catch (error) {
        
        return res.status(500).json({message:error.message})
    }
    
 }

 export const createBookIndex = async(req, res)=>{
    try {
       const result = await createBookIndexService()
        return res.status(201).json(result)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }

 export const insertOneBook = async(req, res)=>{
    try {
       const result = await insertOneDocument (req.body) //الويتر بينادى الشيف و يديله الداتا اللى جايه من بوست مان
        return res.status(201).json(result) //الويتر بيرجع الرد للزبون بالنتيجه اللى الشيف ادهالوا

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }


  export const insertManyBooks = async(req, res)=>{
    try {
       const result = await insertManyBatchDocuments (req.body)
        return res.status(201).json(result) 

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



 export const updateBookYear = async(req, res)=>{
    try {
        const {title} = req.params
        const {year} = req.body
        const result = await updateOneDoument(title, year || 2022)
        return res.status(201).json({
         acknowledged: result.acknowledged,
         matchedCount: result.matchedCount,
         modifiedCount: result.modifiedCount
        }) 

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }
  
 

 export const findOneDocument = async(req, res)=>{
    try {
         const {title} = req.query
         const book = await findOneBook(title)

         if(!book){
            return res.status(400).json({message:"Book not found"})
         }

         return res.status(200).json(book)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }


  export const findBooksByYear= async(req, res)=>{
    try {
         const {from, to} = req.query// from=1990  to=2010
         const books = await findBooksByYearRange(from, to)

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



  export const getBookByGenre= async(req, res)=>{
    try {
         const {genre} = req.query
         const book = await findBookByGenre(genre)

         return res.status(200).json(book)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }


 
  export const getBooksSkip= async(req, res)=>{
    try {
          
         const books = await getBooksSkipLimit ()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



  export const getBooksByYearType= async(req, res)=>{
    try {
          
         const books = await findBooksByYearType()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }


  export const getBooksExcludeGenres= async(req, res)=>{
    try {
          
         const books = await findBooksExcludeGenres()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



   export const deleteBooksBeforeYear= async(req, res)=>{
    try {
          const {year} = req.query
          
         const result = await deleteBooksBeforeYearService(year || 2000)

         return res.status(200).json({
            acknowledged: result.acknowledged,
            deletedCount: result.deletedCount 
         })

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }




 
   export const getBooksAggregate= async(req, res)=>{
    try {
         
          
         const books = await findBooksAggregateService()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



 
   export const getBooksAggregate2 = async(req, res)=>{
    try {
         
          
         const books = await findBooksAggregate2Service()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }




 
   export const getBooksAggregate3 = async(req, res)=>{
    try {
         
          
         const books = await findBooksAggregate3Service()

         return res.status(200).json(books)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }



   export const getBooksAggregate4 = async(req, res)=>{
    try {
         
          
         const result = await  findBooksAggregate4Service()

         return res.status(200).json(result)

    } catch (error) {
          return res.status(500).json({message:error.message})
    }
 }