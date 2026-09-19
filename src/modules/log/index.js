 import {Router} from "express"//بنروح لاكسبرس و ناخد منها تول اسمها راوتر
 import {createCappedCollection} from "./log.controller.js"  // بنجيب الفانكشن اللى موجوده فى الكونترولر
 import { createLog } from "./log.controller.js"

const logRouter = Router()//بنشغل اداه الراوتر و نشيلها جوه متغير 

 logRouter.post("/collection/logs/capped", createCappedCollection)
 logRouter.post("/logs", createLog)

 export default logRouter