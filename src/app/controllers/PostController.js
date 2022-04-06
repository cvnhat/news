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
       //.then(() => res.json(post => {post}))
        .then(() => res.redirect('/admin/stored/posts'))
        .catch(error => {})
    }
    
    //[PUT] 
    update(req, res, next) {
        APost.updateOne({slug: req.params.slug}, req.body)
            .then(() => res.redirect("/admin/stored/posts"))
            .catch(next) 
        
    }
    //[DELETE] 
    destroy(req, res, next) {
        APost.delete({slug: req.params.slug})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[DELETE] 
    forceDestroy(req, res, next) {
        APost.deleteOne({slug: req.params.slug})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[PATCH] 
    restore(req, res, next) {
        APost.restore({slug: req.params.slug})
        .then(() => res.redirect('back'))
        .catch(next)
    }


}

module.exports = new PostController();
