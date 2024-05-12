import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { logger } from "../../utils/logger.js";

const jwksUri = `http://localhost:4116/realms/WebProg/protocol/openid-connect/certs`;

const client = jwksClient({
  jwksUri: jwksUri,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) {
      callback(err, undefined);
      return;
    }

    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

async function verifyToken(token, getKey) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, {}, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

export async function authMiddleware(req, res, next) {
  logger.debug("--authMiddleware-- headers of the reqeust ", req.headers);
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer Token
    if (!token) {
      return res.status(401).send("Authorization token is required");
    }
    logger.info("--authMiddleware-- Validating token in the request");
    await verifyToken(token, getKey);
    next();
  } catch (error) {
    logger.error(error.message);
    return res.status(403).send("Invalid token");
  }
}
