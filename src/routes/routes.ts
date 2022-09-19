import express, {Request, Response} from "express";
import { Todo } from "../models/todo.model";
const router = express.Router();


router.get("/", async(req: Request, res: Response) => {
    Todo.find({}, (err: any, todos: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

router.post("/add", async(req: Request, res: Response) => {
    const { title, description } = req.body;
    const todo = new Todo({
        title: title,
        description: description
    });
    todo.save()
    .then((todo: any) => {
        res.status(200).json({"todo": "todo added successfully"});
    })
    .catch((err: any) => {
        res.status(400).send("adding new todo failed");
    });
});

export { router };