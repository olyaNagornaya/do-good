require('dotenv').config();

const express = require("express");
const cors = require('cors')
const app = express();
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");


const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

const corsOptions = {
  origin: true,
  credentials: true,
}

app.use(logger("dev"));
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: COOKIE_SECRET, // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    cookie: { secure: false }, // не HTTPS
    name: COOKIE_NAME, // имя сессионной куки
    store: new FileStore(), // хранилище для куков - папка с файлами
  })
);


app.use("/", indexRouter);

app.use((req,res,next)=> {
  console.log(req.session);
  next();
})


app.use("/items", itemsRouter);
app.use("/users", usersRouter);




app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
