const express = require('express')
const cors = require('cors');
const { card } = require('./db.js');

const app = express();
app.use(express.json());
app.use(cors());


app.post("/card", async function(req, res) {
    const createId = req.body;
    const parseId = card.safeParse(createId);

    if (!parseId.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await card.create({
        id: createId.title,
        description: createId.description
        
    })

    res.json({
        msg: "Id created"
    })
})

app.get("/getIds", async function(req, res) {
    // const todos = await todo.find({});

    res.json({
        card: []
    })

})

port = 5174

app.listen(port,()=>{
    console.log( `port is unning on ${port} `)
   
});
