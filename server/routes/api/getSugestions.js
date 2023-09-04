const express = require("express");

const router = express.Router();

// Get Single Prompt Recommendations
router.get("/v1", (req,res) => {
    res.send("running properly");
});


// Get Dual Prompt Recommendations
router.get("/v2", (req,res) => {
    res.send("running properly v2");
});
module.exports = router;