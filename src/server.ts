import express from "express";
import bodyParser from "body-parser";
import { server, useDocs } from "@liftr/core";
import { routes } from "@routes/LiftrRoutingModule";
import * as swaggerInfo from "./swagger-info";
import { config } from "./config";

const app = express();

app.set("port", config.port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

useDocs(app, routes, swaggerInfo.descriptions, swaggerInfo.responses);
server(app, routes);

export default server;
