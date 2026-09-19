 import { Router } from "express"
import {createImplicitCollection} from "./author.controller.js"

const authorRouter = Router()

authorRouter.post("/collection/authors", createImplicitCollection)

export default authorRouter




