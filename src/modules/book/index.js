import { Router } from "express"
import { createBooksCollection, findOneDocument, getBooksAggregate4} from "./book.controller.js"
import { createBookIndex} from "./book.controller.js"
import { insertOneBook } from "./book.controller.js"
import { updateBookYear } from "./book.controller.js"
import { findBooksByYear } from "./book.controller.js"
import { getBookByGenre } from "./book.controller.js"
import { getBooksSkip } from "./book.controller.js"
import { getBooksByYearType } from "./book.controller.js"
import { getBooksExcludeGenres } from "./book.controller.js"
import { deleteBooksBeforeYear } from "./book.controller.js"
import { insertManyBooks } from "./book.controller.js"
import { getBooksAggregate } from "./book.controller.js"
import { getBooksAggregate2 } from "./book.controller.js"
import { getBooksAggregate3 } from "./book.controller.js"



const router = Router()
 

router.post("/collection/books", createBooksCollection)

router.post("/collection/books/index", createBookIndex)

router.post("/books", insertOneBook)

router.patch("/books/:title", updateBookYear)

router.get("/books/title", findOneDocument)

router.post("/books/batch", insertManyBooks)

router.get("/books/year", findBooksByYear)

router.get("/book/genre", getBookByGenre)

router.get("/books/skip-limit", getBooksSkip)

router.get("/books/year-integer", getBooksByYearType)

router.get("/books/exclude-genres", getBooksExcludeGenres)

router.delete("/books/before-year", deleteBooksBeforeYear)

router.get("/books/aggregate1", getBooksAggregate)

router.get("/books/aggregate2", getBooksAggregate2)

router.get("/books/aggregate3", getBooksAggregate3 )

router.get("/books/aggregate4", getBooksAggregate4)


export default router

 