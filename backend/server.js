import app from "./app.js";

app.listen(process.env.PORT, ()=>{console.log(`Server running On Port ${process.env.PORT}`)});