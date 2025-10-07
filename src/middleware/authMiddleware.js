import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

function authMidlleware(req, res, next) {
    const token = req.headers['authorization']

    if (!token) { 
        return res.status(StatusCodes.UNAUTHORIZED).json({message:`No token found`})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(StatusCodes.UNAUTHORIZED).json({message: `Invalid token`})
        }
        
        if (!decoded || !decoded.id) {
            return res.status(StatusCodes.UNAUTHORIZED).json({message: `Invalid token payload`})
        }
        
        req.userId = decoded.id
        next();
    })
}

export default authMidlleware;