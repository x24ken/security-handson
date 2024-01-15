const express = require('express');
const router = express.Router();

const allowList = [
    "http://localhost:3000",
    "http://site.example:3000"
]

router.use((req, res, next) => {
    // Originヘッダが存在している、かつリクエスト許可するリスト内にOriginヘッダの値が含まれているかチェック
    if (req.headers.origin && allowList.includes(req.headers.origin)) {
        res.header("Access-Control-Allow-Origin", req.headers.origin)
    }
    if (req.method === "OPTIONS") {
        // プリフライトリクエストで、許可するヘッダを明示する
        res.header("Access-Control-Allow-Headers", "X-Token")
    }
    next();
})

router.get('/', (req, res) => {
    res.setHeader("X-Timestamp", Date.now())
    let message = req.query.message
    const lang = req.headers["X-Lang"]

    if (message === ""){
        res.status(400);
        if (lang === "en") {
            message = "Bad Request"
        } else {
            message = "不正なリクエストです"
        }
    }
    res.send({ message })
});

router.use(express.json())
router.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    res.end()
})

module.exports = router;