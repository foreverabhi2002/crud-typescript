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
    Todo.create({ title, description }, (err: any, todo: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

router.put("/update/:id", async(req: Request, res: Response) => {
    const { title, description } = req.body;
    Todo.findByIdAndUpdate(req.params.id, { title, description }, (err: any, todo: any) => {
        if(err) {
            console.log(err);
        } else {
            res.json(todo);
        }  
    });
});

router.delete("/delete/:id", async(req: Request, res: Response) => {
    Todo.findByIdAndRemove(req.params.id, (err: any, todo: any) => {
        if(err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});


export { router };