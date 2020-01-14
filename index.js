const express = require("express");
const app = express();
//changing to 80 for azure
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
    res.send("super simple!");
});

app.listen(port, () => {
    console.log(`Listening on ${port}!`);
});
