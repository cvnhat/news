const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const APost = new Schema({
    title: { type: String },
    content: { type: String, maxlength: 800 },
    type: {type: String},
    image: { type: String },
    slug: { type: String, slug: 'title', unique: true},
    authorGmail: {type: String},
    totalLike:{type: Number},
    videoId:{type: String}
},{
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
APost.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true})

module.exports = mongoose.model('APost', APost);
