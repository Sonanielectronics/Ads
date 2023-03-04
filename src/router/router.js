const HTTP = require("../../constant/response.constant");
const fs = require("fs");

const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);

router.get("/add", class1.b);
router.post("/add", class1.c);

router.get("/:id", class1.d);
router.post("/:id", class1.e);

router.get("/:id/data", class1.f);

module.exports = router;
