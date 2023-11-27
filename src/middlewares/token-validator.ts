import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

// Este middleware se encarga de imprimir en cada solicitud, el metodo y la url en la terminal
const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Nothing to do over here.." });

  const token = authorization.split(' ')[1];  // el [0] es 'bearer'

  const validatedToken = verifyToken(token) as any;

  if (validatedToken.error)
     return res.status(401).json({ message: "Nothing to do over here.." });

  const { email, userId} = validatedToken;

  res.locals.userData = { email, userId};
  
  next();
};

export { authorizeUser };
