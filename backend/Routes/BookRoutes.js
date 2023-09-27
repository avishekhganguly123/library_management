const express = require('express');
const router = express.Router();
const {getBooks,SaveBooks,issueBooks,deleteBooks} = require('../Controllers/BookControllers');

router.get("/books",getBooks);
router.get("/data-import",SaveBooks);
router.patch("/books/issue",issueBooks);
router.delete("/books", deleteBooks);

module.exports = router;

