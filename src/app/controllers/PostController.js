const APost = require('../models/APost');

class PostController { 
    //[POST] /admin/create
    store(req, res, next) {
        const title=req.body.title
        const content=req.body.content
        const type=req.body.type
        const image=req.body.image
        const email='caovnhat2001@gmai.com'
        const like=100
        const videoId=req.body.videoId
        const apost=new APost({title, content, type, image, email, like, videoId})
        apost.save()
       .then(() => res.json(post => {post}))
        //.then(() => res.redirect('/admin/stored/posts'))
        .catch(error => {})
    }
    
    //[PUT] /products/:id
    update(req, res, next) {
        Menu.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect("/admin/stored/products"))
            .catch(next)    
        
    }
    //[DELETE] /product/:id
    destroy(req, res, next) {
        Menu.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[DELETE] /products/:id/force
    forceDestroy(req, res, next) {
        Menu.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[PATCH] /cources/:id/restore
    restore(req, res, next) {
        Menu.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }


}

module.exports = new PostController();
