const express = require('express');
const router = express.Router();
const {addMember} = require('../Controllers/MemberController');

router.post("/members",addMember);

module.exports = router;