import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "backend",
    })
    .then(() => console.log("Dabatbase connected"))
    .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Messge = mongoose.model("Message", messageSchema);

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { name: "Pavan" });
});

app.post("/contact", async (req, res) => {
    await Messge.create({ name: req.body.name, email: req.body.email });
    res.render("success");
});
app.get("/users", (req, res) => {
    res.json({
        users,
    });
});

app.listen(5000, () => {
    console.log("Server is Working");
});
