import express from "express";
import bodyparser from "body-parser";
import bodyParser from "body-parser";
import serveIndex from "serve-index";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
   res.render("partial/navigator.ejs");
 });

 app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 });
