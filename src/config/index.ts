import dotenv from "dotenv";

dotenv.config();

interface Auth {
  username: string;
  password: string;
}

interface Config {
  environment: string;
  port: number;
  auth: Auth,
  services: string[],
  timeout: number,
}

export const config: Config = {
  environment: process.env.NODE_ENV || "dev",
  port: Number.parseFloat(process.env.PORT) || 4000,
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  services: [
    "https://discovery-stub.comtravo.com/source1",
    "https://discovery-stub.comtravo.com/source2",
  ],
  timeout: Number.parseFloat(process.env.timeout) || 500,
};
