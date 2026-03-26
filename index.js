import express from "express";
import methodOverride from "method-override";
import session from "express-session"; 
import inicio from "./routes/inicio_routes.js";
import login from "./routes/login_routes.js"
import { db } from "./models/relaciones.js";

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(methodOverride("_method"))


app.use(session({
  secret: "mi_secreto_super_seguro",
  resave: false,
  saveUninitialized: false
}));


app.use((req, res, next) => {
  res.locals.usuario = req.session.usuario || null;
  next();
});

try {
  await db.authenticate();
  db.sync()
  console.log("Conexion exitosa a la b.d");
} catch (error) {
  console.log(error);
}

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));


app.use("/", inicio)
app.use("/login", login)


app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

const port = 4800;
app.listen(port, () => {
  console.log(`Esperando peticiones en el puerto ${port}`);
});