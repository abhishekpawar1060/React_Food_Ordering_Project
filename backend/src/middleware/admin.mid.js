import { UNAUTHRIZED } from "../constants/httpStatus.js";
import authMid from "./auth.mid.js";


const adminMid = ( req, res, next) => {
    if(!req.user.isAdmin) res.status(UNAUTHRIZED).send();

    return next();
}

export default [authMid, adminMid];