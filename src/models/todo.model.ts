import mongoose from "mongoose";

interface TodoI {
    title: string;
    description: string;
}

interface TodoDocument extends mongoose.Document {
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: {
        type: String,
        required: true
    },
});

interface TodoModelInterface extends mongoose.Model<TodoDocument> {
    set(x: TodoI) : TodoDocument;
}

todoSchema.statics.set = (x: TodoI) => {
    return new Todo(x);
}

const Todo = mongoose.model<TodoDocument, TodoModelInterface>(
    "Todo", 
    todoSchema
);

Todo.set({
    title: "title",
    description: "description"
});

export { Todo };