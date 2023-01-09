import * as dotenv from "dotenv";
dotenv.config();
import ServerClass from "./models/server.js";

const server = new ServerClass();

server.listen();
