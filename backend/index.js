const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app = express()
app.use(express.json())



app.post("/todo", async function (req, res) {
    const createPayLoad = req.body;
    const parsepayload = createTodo.safeParse(createPayLoad)
    if (!parsepayload.success) {
        res.status(404).json({
            msg: "you have enter the wrong input"
        })
        return;

    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description
        
    })
    res.json({
        msg: "todo done "
    })
})
app.get("/todos",async function (req, res) {
const todos = await todo.find({});

res.json({
    todos
})

})
app.put("/completed",async function (req, res) {
    const updatePayLoad = req.body;
    const parsepayload = updateTodo.safeParse(updatePayLoad)
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "you sent the wrong the inputs"
        })
        return;

    }
    await todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );
res.json({
    msg: "done this user"
})
})


app.listen(3000)
