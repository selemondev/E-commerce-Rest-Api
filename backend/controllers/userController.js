const User = require("../models/userModal");
const asyncHandler = require("express-async-handler");
const updateUser = asyncHandler( async( req, res ) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedUser)
});

module.exports = {
    updateUser
}
