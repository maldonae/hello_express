import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
