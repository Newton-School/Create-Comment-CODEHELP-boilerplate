const express = require("express");

const { createComment } = require("../controllers/commentControllers");

const router = express.Router();

router.post("/create", createComment);

module.exports = router;