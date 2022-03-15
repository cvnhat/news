const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController');

//router.delete('/:id/force', PostController.forceDestroy); // xóa vĩnh viễn một món ăn
//router.patch('/:id/restore', PostController.restore); // khôi phục món ăn
//router.get('/:id', PostController.show); // show 1 món ăn 
// router.put('/:id', PostController.update);// sửa món ăn
// router.delete('/:id', PostController.destroy); // xóa món ăn
router.post('/', PostController.store); // thêm mới món ăn

module.exports = router;