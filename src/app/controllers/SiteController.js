const APost=require("../models/APost")
const jwt = require('jsonwebtoken');
class SiteController {
    home(req, res, next) {
        // if(req.cookies.UserToken){
        //     var userId=jwt.verify(req.cookies.UserToken, 'shhh')
        //     Promise.all([APost.find().limit(3).skip(4).lean(), home, Customer.find().limit(5).lean(), User.findOne({_id: userId._id}).lean()])
        //         .then(([post]) => {
        //                 res.render('site/home', {post})
        //         })
        //         .catch(next);
        // }else{
        //      Promise.all([APost.find().limit(3).lean()])
        //         .then(([post]) => res.render('site/home', {post}))
        //         .catch(next);
        // }
        Promise.all([APost.find().limit(1).lean(),APost.find().limit(4).lean()])
        .then(([post, post1]) => res.render('site/home', {post,post1}))
        .catch(next);
    }

     // GET /:id
    show(req, res, next) {
        Promise.all([APost.findOne({ slug: req.params.slug }).lean(), APost.find().lean()])
            .then(([post, post1]) => res.render('site/postDetail', {post, post1}))
            //.then(post => res.json(post))
            .catch(next);
    }
    


}
module.exports = new SiteController();
