import dotenv from 'dotenv';

dotenv.config();

export const config = {
    environment: process.env.NODE_ENV,
    port: Number.parseFloat(process.env.PORT) || 8081,
    auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
    services: [
        "https://discovery-stub.comtravo.com/source1",
        "https://discovery-stub.comtravo.com/source2",
    ],
};
