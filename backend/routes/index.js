const express = require("express");
const userRouter = require("./user");
const adminRouter = require("./user");

const router = express.Router();

router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;
