import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as util from 'util'
import { ErrorPayload } from './abstractions/ErrorPayload'
require('dotenv').config()

const server = express()
const port: number = parseInt(process.env.SERVER_PORT)
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const corsOptions = {
  origin: 'http://localhost:5050',
}

console.log(`vars from .env file auth0domain is ${process.env.AUTH0_DOMAIN}`)


//configure error handling middleware

/**
 * This handler handles all error responses that are not server errors which means all errors in the 
 * 4xx family.
 * @param req Express Request used to receive any parameter in the request body or query parameters
 * @param res Express Response used to send back any clamant messages and/or data from server to client
 * @param next Express built in functionality to handle passing any response body artifacts down the
 *             pipeline for further processing.
 * @param err Optional parameter that carries an exception that must have been thrown on the serverside.
 *            This should either be an exception or a string message carrying wording of error encountered.
 */
const userErrors = (err: Error | ErrorPayload, req: express.Request, res: express.Response, next: express.NextFunction) => {
  //check if the response has any kind of error that is not in the server error family
  const errorPayload: ErrorPayload = { message: "", errorCode: 0, stack: "", name: userErrors.name }
  if(res.statusCode >= 400 && res.statusCode < 500) {
    if(util.isString(err)) {
      errorPayload.message = err.message
    }
    if(util.types.isNativeError(err)) {
      errorPayload.stack = err.stack
    }
    errorPayload.errorCode = res.statusCode
    next(errorPayload);
  }
}

/**
 * This handler handles all error responses that are server errors which means all errors in the 
 * 5xx family.
 * @param req  {Express.Request} used to receive any parameter in the request body or query parameters
 * @param res  {Express.Response} used to send back any clamant messages and/or data from server to client
 * @param next {Express.NextFunction} built in functionality to handle passing any response body artifacts down the
 *             pipeline for further processing.
 * @param err {Error|ErrorPayload} parameter that carries an exception that must have been thrown on the serverside.
 *            This should either be an exception or a string message carrying wording of error encountered.
 */
const serverErrors = (err: Error | ErrorPayload, req: express.Request, res: express.Response, next: express.NextFunction) => {
  //check if the response has any kind of error that in the server error group of errors
  const errorPayload: ErrorPayload = { message: "", errorCode: 0, stack: "", name: serverErrors.name }

  if(res.statusCode > 499 && res.statusCode < 600) {
    if(util.isString(err)) {
      errorPayload.message = err.message
    }
    if(util.types.isNativeError(err)) {
      errorPayload.stack = err.stack
    }
    errorPayload.errorCode = res.statusCode
    next(errorPayload);
  }
}

/**
 * Catch all error handler for the entire api platform.
 * 
 * @param err {Error or ErrorPayload} carries signature of exception that might have been thrown anywhere in the application
 * @param req {Express.Request} used to receive any parameter in the request body or query parameters
 * @param res {Express.Response} used to send back any clamant messages and/or data from server to client
 * @param next {Express.NextFunction} built in functionality to handle passing any response body artifacts down the
 *             pipeline for further processing.
 */
const errorTerminal = (err: Error | ErrorPayload, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if(res.headersSent) {
    return next()
  }
  // set a default error status before sending back to client
  if(err instanceof ErrorPayload) {
    res.status(err.errorCode);
    res.json(err)
  }
  res.status(500)
  res.json(err);
}


// configure server to consume middleware
server.use(morgan("dev"))
server.use(jsonParser)
server.use(cors(corsOptions))
server.use(userErrors)
server.use(serverErrors)
server.use(errorTerminal)

// server starts listening for traffic
server.listen(port, () => {
  console.log(`Server listening on port ${port} sucessfully!`)
})

export default server
