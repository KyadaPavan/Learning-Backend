import express from 'express';



console.log("hello");

const app = express();

app.get("/getproducts", (req, res) => {
    res.json({
        success: true,
        products: []
    })
})

app.listen(5000, () => {
    console.log("Server is Working");
})

