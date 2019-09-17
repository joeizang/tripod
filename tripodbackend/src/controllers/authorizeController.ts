import { Router, Request, Response } from 'express'
import { checkJwt, jwtauth } from '../config/authentication'

const router = Router()


router.get('/auth', checkJwt, jwtauth, (req: Request, res: Response) => {
  // two things need to happen here, if the user is not properly authenticated then they should
  // be redirected to proper endpoint at auth0 to get properly authenticated - this is the default behaviour

  //second would be that if they are already loggedin then they should be sent on their merry way
  //to the specific endpoint they desire to get to.
})