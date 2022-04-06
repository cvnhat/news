const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController');

router.delete('/:slug/force', PostController.forceDestroy); // xóa vĩnh viễn một món ăn
router.patch('/:slug/restore', PostController.restore); // khôi phục món ăn
//router.get('/:slug', PostController.show); // 
router.put('/:slug', PostController.update);// sửa post
router.delete('/:slug', PostController.destroy); // xóa post
router.post('/', PostController.store); // thêm moi

module.exports = router;