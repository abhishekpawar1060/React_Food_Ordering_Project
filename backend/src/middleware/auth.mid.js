// import { verify  } from "jsonwebtoken";
import pkg from 'jsonwebtoken'
import { UNAUTHRIZED } from "../constants/httpStatus.js";
const { verify  } = pkg;

export default (req, res, next) => {
   const token = req.headers.access_token;
   if(!token){
    return res.status(UNAUTHRIZED).send();
   }

   try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
   } catch (error) {
    res.status(UNAUTHRIZED).send();
   }

   return next();
}