import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { socketController } from "../socket/controller.js";

export default class ServerClass {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = createServer(this.app);
    this.io = new Server(this.server);

    //paths
    this.paths = {};

    this.middlewares();
    this.routes();
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    //this.app.use(this.paths.user, router);
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port || 3000, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}
