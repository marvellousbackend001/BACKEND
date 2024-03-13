const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");

const app = express();
const prisma = new primaclient()

const storage = multer.memotystorage()
const upload = multer({ storage: storage })

upload.single('image')

app.get("/api/posts", async (req, res) => {
    const posts = await prisma.posts.findmany({ orerBy: [{ created: 'desc' }] })
    res.send(posts)
})

app.post('/api/posts', upload.single('image'), async (req, res) => {
    console.log("req.body", req.body)
    console.log("req.file", req.file)
    req.file.buffer
    res.send({})
})

app.delete("/api/post/:id", async (req, res) => {
    console.log("req.body", req.body)
    const id = +req.params.id
    res.send({})
})

app.listen(8000, () => console.log("listening on port 8000"))
