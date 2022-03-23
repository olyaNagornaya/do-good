require('dotenv').config();

const express = require("express");
const cors = require('cors')
const app = express();
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport')

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");


const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

const corsOptions = {
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
}







app.use(logger("dev"));
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("trust proxy", 1);




// passport.use(new GoogleStrategy({
//    clientID: process.env['GOOGLE_CLIENT_ID'],
//    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
//     callbackURL: "http://localhost:3001",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));



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


app.use("/users", usersRouter);
app.use("/items", itemsRouter);

// app.get('/auth/google',
// passport.authenticate('google', { scope:
//    [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));




const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 8080
}, () => console.log('Server started on 5000'))

wss.on('connection', function connection(ws) {
  ws.on('message', function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message)
        break;
      case 'connection':
        broadcastMessage(message)
        break;
    }
  })
})

function broadcastMessage(message) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify((message)))
  })
}


app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
