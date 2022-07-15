const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({  
    username: {
        type: String,
        required: [true, "Please add a username"],
    },
    email: {
        type: String,
        required: [true, "Please add an email address"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password to your account"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

    profileImg: {
        type: String,
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", UserSchema);