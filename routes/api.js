const express = require('express');
const router = express.Router();

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