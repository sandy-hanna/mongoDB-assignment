import {getDB} from "../../DB/connection.db.js"

 
 export const createBooksCollectionService = async()=>{

    const db = getDB()
    return await db .createCollection("books",{
        validator:{
            $jsonSchema:{
                bsonType:"object",
                required:["title"],
                properties:{
                    title:{
                        bsonType:"string",
                        minLength:1
                    }
                }
            }
        }
    })
  }

  
  export const createBookIndexService = async()=>{
      const db = getDB()
      return await db.collection("books").createIndex({title:1})
  }


  export const insertOneDocument= async(bookData)=>{
     
    const db = getDB()
    return await db.collection("books").insertOne(bookData)
  }



   export const insertManyBatchDocuments= async(booksData)=>{
     
    const db = getDB()
    return await db.collection("books").insertMany(booksData)
  }



   export const updateOneDoument= async(title, newYear)=>{
     
    const db = getDB()
    return await db.collection("books"). updateOne(
        { title: title},
        { $set: {year: Number(newYear)} }
    )
  }



  
   export const findOneBook= async(title)=>{
     
    const db = getDB()
    return await db.collection("books"). findOne(
        { title: title}
      
    )
  }



   export const findBooksByYearRange= async(from, to)=>{
     
    const db = getDB()
    return await db.collection("books"). find({
        
        year:{
            $gte: Number(from),
            $lte: Number(to)
        }
      
   }).toArray()
  }


  
   export const findBookByGenre= async(genre)=>{
     
    const db = getDB()
    return await db.collection("books"). find({
        genres: genre //هيدور على الكتب اللى المصفوفه بتاعتها فيها النوع ده
    }).toArray()
  }
     
  


    export const getBooksSkipLimit= async()=>{
     
    const db = getDB()
    return await db.collection("books"). find()
    .sort({year:-1}) //dec
    .skip(2)
    .limit(3)
    .toArray()
      
  }



   export const findBooksByYearType= async()=>{
     
    const db = getDB()
    return await db.collection("books"). find({
             
        year: {$type: "int"}
    }).toArray()
  }


     export const findBooksExcludeGenres= async()=>{
     
    const db = getDB()
    return await db.collection("books"). find({
             
        genres: {$nin :["Horror", "Science Fiction"]}
    }).toArray()
  }
     

  
     export const deleteBooksBeforeYearService= async(year)=>{
     
    const db = getDB()
    return await db.collection("books"). deleteMany({
             year: { $lt : Number(year)}
    })
  }



     export const findBooksAggregateService= async()=>{
     
    const db = getDB()
    return await db.collection("books"). aggregate([

        {
            $match: {
                year: {$gt: 2000} //فلتره الكتب بعد سنه 2000
            }
        },

        {
            $sort: {
                year: -1 // تنازلى
            }
        }
    ]) .toArray()
  }





  export const findBooksAggregate2Service= async()=>{
     
    const db = getDB()
    return await db.collection("books"). aggregate([

        {
            $match: {
                year: {$gt: 2000} //فلتره الكتب بعد سنه 2000
            }
        },

        {
            $project: {
                _id: 0 ,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]) .toArray()
  }




   export const findBooksAggregate3Service= async()=>{
     
    const db = getDB()
    return await db.collection("books"). aggregate([

        {
            $unwind: "$genres"//هنفك مصفوفه التصفيات
        },

        {
            $project: {
                _id: 0 ,
                title: 1,
                genres: 1
            }
        }
    ]) .toArray()
  }




  
   export const findBooksAggregate4Service= async()=>{
     
    const db = getDB()
    const log = await db.collection("log"). find({}).toArray()
   }