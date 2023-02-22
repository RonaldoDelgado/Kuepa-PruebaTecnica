import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/message.js";
import bodyParser from "body-parser";

//Mongoose configuration **********************************************************
const url =
  "mongodb+srv://ronalldocorrea:ronaldoadmin59@cluster1.j9wudll.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

const app = express();
//Creamos el servidor con el módulo http de node
const server = http.createServer(app);
//Utilizamos como servidor el proporcionado por socket.io. Configuramos cors indicando que cualquier servidor se puede conectar
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

//Vemos las peticiones por consola utilizando el paquete morgan en modo dev
app.use(morgan("dev"));

//Cargamos el bodyParser: middleware para analizar cuerpos de a través de la URL

app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier tipo de petición lo convertimos a json:
app.use(bodyParser.json());

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("message", (message, nickname) => {
    console.log(message);

    socket.broadcast.emit("message", {
      body: message,
      from: nickname,
    });
  });
});

//**** Ficheros ruta **************************************************************
app.use("/api", router);

//Nos conectamos a mongoDB. Opción { useNewUrlParser: true } para utilizar las últimas funcionalidades de mongoDB
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("Conexión con la BDD realizada con éxito!!!");
  server.listen(PORT, () => {
    console.log("servidor ejecutándose en http://localhost:", PORT);
  });
});
