const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.end("Top page")
})

// サーバーを起動する
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})