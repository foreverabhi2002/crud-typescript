import express, {Request,Response} from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import mongoose, {ConnectOptions} from "mongoose";

dotenv.config();

// mongoose.connect(process.env.MONGODB_URL as string, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// } as ConnectOptions)
// .then((db) => {
//     console.log("Database Connected Successfully");
// })
// .catch((err) => {
//     console.log("Error Connectiong to the Database");
// });

mongoose.connect(process.env.MONGODB_URL as string, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions)
.then((db) => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Error Connectiong to the Database");
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);


app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`);
});