import express from 'express';

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("You are connected to the api")
})

export default router; 