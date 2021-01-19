
/** put all routes together here and export out  */

const router = require("express").Router();

const tutorsRouter = require("./tutors")
 

router.use("/tutors",tutorsRouter)

module.exports = router