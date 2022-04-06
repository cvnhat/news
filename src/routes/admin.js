const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/create/posts', adminController.createPost);
// router.get('/edit/posts/:id', adminController.check, adminController.editPost);
// router.get('/stored/posts',adminController.check ,adminController.storedPost);
// router.get('/trash/posts',adminController.check, adminController.trashPosts);
router.get('/edit/:slug', adminController.editPost);
router.get('/stored/posts',adminController.storedPost);
router.get('/trash/posts', adminController.trashPosts);

router.get('/stored/books',adminController.check ,adminController.storedBooks);
router.get('/trash/books',adminController.check ,adminController.trashBooks);

module.exports = router;

