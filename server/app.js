import e from "express";

const app = e();
const PORT = 8080;

app.get("/", (req,res) => {
    res.send("hehe")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});