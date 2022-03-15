const siteRouter = require('./site');
const adminRouter = require('./admin');
const postsRouter = require('./posts');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/posts', postsRouter);
    app.use('/', siteRouter);
}

module.exports = route;