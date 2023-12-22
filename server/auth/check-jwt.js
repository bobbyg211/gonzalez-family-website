import { expressjwt } from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import { domain, audience, management } from "../config/env.dev.js";

const checkJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),

  audience: [audience, management],
  issuer: [`https://${domain}/`, "https://auth.hubslate.io/"],
  algorithms: ["RS256"],
});

export { checkJwt };
