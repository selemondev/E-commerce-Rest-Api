const jwt = require("jsonwebtoken");
const User = require("../models/userModal");
const asyncHandler = require("express-async-handler");
const protect = asyncHandler( async ( req, res ) => {
    let token;

    if( req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        next()
    } else {
        res.status(401)
        throw new Error("Unauthorized")
    }

    if( !token ) {
        res.status(401)
        throw new Error("No token, not authorized")
    }
});

module.exports = {
    protect
}