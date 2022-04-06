const APost = require('../models/APost');
const jwt = require('jsonwebtoken');
class AdminController{
    
    createPost(req, res, next) {
        res.render('admin/create-posts')
    }

    //[GET] /products/:id/edit
    editPost(req, res, next) {
        APost.findOne({slug: req.params.slug}).lean()
            .then(post => res.render('admin/edit-posts', {post}))
            .catch(next)                      
    }

    //[GET] /admin/stored/products
     storedPost(req, res, next){
        Promise.all([APost.find({}).lean(), APost.countDocumentsDeleted()])
            .then(([posts, deletedCount]) => res.render('admin/stored-posts', {deletedCount, posts}))
            .catch(next);
       }

    //[GET] /admin/trash/products
    trashPosts(req, res, next){
        APost.findDeleted({}).lean()
            .then(posts => res.render('admin/trash-posts', {posts}))
            .catch(next);
    }

    //[GET] /register
    register(req, res, next) {
        res.render('user/register')
    }
    //[GET] /login
    login(req, res, next) {
        res.render('user/login')
    }



     //[POST] /login
    log(req, res, next) {
        User.findOne({username:req.body.username, password:req.body.password})
        .then(user=>{
            if(user){
                var token = jwt.sign({ _id: user._id }, 'shhh');
                res.cookie('UserToken', token)
                res.redirect('/admin')
            }
            else{
                res.json("Đăng nhập không thành công")
            }
        })
        .catch(err=>{message:"lỗi server"})
    }
    //check admin
    check(req, res, next){
        try{
            var token=req.cookies.UserToken;
            var idUser=jwt.verify(token, 'shhh')
            if(idUser){
                User.findOne({_id: idUser})
                .then(user=>{
                    if(user.role=="admin"){
                        next()
                    }
                    else if(user.role=="user")
                        res.redirect('/')
                })
                .catch(err=>{message:"Lỗi"})
            }
        }catch(err){
            return res.redirect("/login")
        }
    }
    //[GET] /logout
    logout(req, res, next){
        res.clearCookie('UserToken',req.cookies.UserToken);
        res.redirect('/login');
    }

    //[POST] /register
    reg(req, res, next) {
        const user=new User(req.body)
        user.save()
        .then(() => res.redirect('/login'))
        .catch(error => {message:"Đăng kí không thành công"})
    }
    //[GET] /admin/stored/books
    storedBooks(req, res, next){
        Promise.all([BookATalbe.find({}).lean(), BookATalbe.countDocumentsDeleted()])
        .then(([books, deletedCount]) => res.render('admin/books/stored-books', {deletedCount, books}))
        .catch(next);
    }

    //[GET] /admin/trash/books
    trashBooks(req, res, next){
        BookATalbe.findDeleted({}).lean()
            .then(books => res.render('admin/books/trash-books', {books}))
            .catch(next);
    }

}

module.exports = new AdminController();
