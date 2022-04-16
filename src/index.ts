import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import usuariosRoutes from "./routes/usuariosRoutes";
import institutosRoutes from "./routes/institutosRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import morgan from "morgan";
import cors from "cors";

class Server {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.app.use(express.static(__dirname + "/img"));
  }
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes(): void {
    this.app.use(indexRoutes);
    this.app.use("/api/usuarios", usuariosRoutes);
    this.app.use("/api/institutos", institutosRoutes);
    this.app.use("/api/profesores", profesoresRoutes);
    //this.app.use('/api/carreras',carrerasRoutes);
  }
  start(): void {
    this.app.listen(this.app.get("port"), "172.168.11.131", () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}
const server = new Server();
server.start();
