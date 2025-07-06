const express = require('express');
const {infoSchema, updateSchema} = require('./ZodSchema');
const {Todo} = require('./mogoSchema');
const cors = require('cors');

const app = express()
const port = 3000;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
}))


app.post("/todo", async(req,res) => {
    const newTodo = req.body;
    const todos = infoSchema.safeParse(newTodo) ;

    if (!todos.success) {
        res.status(400).json({
            error: todos.error.errors.map(err => err.message)
        })
    }
    try{
        const todo = new Todo ({
            title: newTodo.title,
            description: newTodo.description,
            completed: false
        })
        await todo.save()
        res.status(201).json({
            message: "Todo created successfully",
        })

    }catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
})



app.get("/todo", async(req, res) => {
    const todos = await Todo.find({})
    res.json({todos});
    
})

app.put("/completed" , async(req,res) => {

    const updateData = req.body;
    const update = updateSchema.safeParse(updateData);

    if (!update.success) {
        res.status(400).json({
            error: update.error.errors.map(err => err.message)
        })
    }
    // if the validation fails, we return a 400 Bad Request response with the error messages
    try { 
        await Todo.updateOne({_id: updateData.id}, {completed: true});
        res.status(200).json({
            message: "Todo updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })

    }

})



app.listen(port, () => {  console.log(`Server is running at http://localhost:${port}`);
});