const express = require('express');
const cors = require('cors');
const { createId } = require('./types');
const { Card } = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

app.post("/card", async (req, res) => {
    const inputData = req.body;

    try {
        
        const validatedData = createId.parse(inputData);

        
        await Card.create({
            id: validatedData.id,
            description: validatedData.description
        });

        return res.json({
            message: "Card created successfully"
        });
    } catch (error) {
        console.error("Error creating card:", error);
        return res.status(400).json({
            error: "Invalid input data"
        });
    }
});


app.get('/getId', async (req, res) => {
    try {
        const cards = await Card.find();
        return res.json(cards);
    } catch (error) {
        console.error("Error fetching cards:", error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
});

const port = 5174;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
