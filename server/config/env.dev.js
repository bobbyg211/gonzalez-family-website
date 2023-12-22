import dotenv from "dotenv";
dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const management = process.env.AUTH0_MANAGEMENT;
const domain = process.env.AUTH0_DOMAIN;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;

if (!audience) {
  throw new Error(".env is missing the definition of an AUTH0_AUDIENCE environmental variable");
}

if (!management) {
  throw new Error(".env is missing the definition of an AUTH0_MANAGEMENT environmental variable");
}

if (!domain) {
  throw new Error(".env is missing the definition of an AUTH0_DOMAIN environmental variable");
}

if (!clientOriginUrl) {
  throw new Error(".env is missing the definition of a APP_ORIGIN environmental variable");
}

const clientOrigins = ["http://localhost:3000"];

export { audience, management, domain, clientOriginUrl, clientOrigins };
