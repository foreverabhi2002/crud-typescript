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
    const title = req.body.title;
    const description = req.body.description;
    Todo.set({
        title: title,
        description: description
    }).save((err: any, todo: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

export { router };