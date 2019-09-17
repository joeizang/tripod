import { Router, Request, Response } from 'express'
import { config } from '../config/authentication'

const router = Router()

/**
 * Authenticate users when they get to this endpoint
 * 
 * @param {jwt.RequestHandler} checks and makes sure that jwt toke in valid
 * @param {Express.Request} bears all artifacts of a request made to the api
 * @param {Express.Response} carries the payload of the servers response
 */

router.get('/auth', config.checkJwt, (req: Request, res: Response) => {
  // two things need to happen here, if the user is not authenticated then they should
  // be redirected to proper endpoint at auth0 to get properly authenticated - this is the default behaviour

  //second would be that if they are already loggedin then they should be sent on their merry way
  //to the specific endpoint they desire to get to.
})