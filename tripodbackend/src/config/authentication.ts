import * as jwt from 'express-jwt'
import * as jwksRsa from 'jwks-rsa'
import * as jwtauth from 'express-jwt-authz'

const config = {
  checkJwt : jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}`,
    algorithms: ['RS256']
  }),
  JwtAuth: jwtauth,
}

export { config }