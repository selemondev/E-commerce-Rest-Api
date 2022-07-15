const express = require('express');
const { protectAdmin } = require("../middleware/authMiddleware");
const { updateUser } = require("../controllers/userController");
const router = express.Router();
router.route("/update/:id").put(protectAdmin, updateUser)
module.exports = router;
