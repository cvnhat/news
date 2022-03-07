
class SiteController {
    index(req, res, next) {
        res.render('site/index')
    }
}
module.exports = new SiteController();
