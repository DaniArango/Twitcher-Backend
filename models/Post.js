const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ingrese un titulo."],
    },
    body: {
        type: String,
        required: [true, "Ingrese texto"],
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    comments: [{

        userId: { type: ObjectId, ref: 'User' },
        comment: String
    },
],
likes: [{ type: ObjectId }],
},
{ timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;