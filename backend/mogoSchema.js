const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todoapp")
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
    Todo
}
// This code connects to a MongoDB database named "todoapp" and defines a Mongoose schema for a Todo item.
