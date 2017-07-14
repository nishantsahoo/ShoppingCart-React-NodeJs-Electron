const express = require("express");
const app = express(); // express object
app.use(express.static("static"));
app.listen(8000, function() {
    console.log("Listening on port 8000")
});