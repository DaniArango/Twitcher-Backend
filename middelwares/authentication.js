const User = require('../models/User');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
require ("dotenv").config ();


const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: payload._id, tokens: token });
        if (!user) {
            return res.status(401).send({ msg: 'No estas autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, msg: 'Ha habido un problema con el token' })
    }
}

    const isAdmin = async (req, res, next) => {

        const admins = ['admin', 'Principit@'];
        if (!admins.includes(req.user.role)) {
            return res.status(403).send({
                message: 'No tienes permiso'
            });
        }
        next();
    }

    const isAuthor = async(req, res, next) => {
        try {
            const post = await Post.findById(req.params._id);
            if (post.userId.toString() !== req.user._id.toString()) { 
                return res.status(403).send({ msg: 'Esta publicación no es tuya' });
            }
            next();
        } catch (error) {
            console.error(error)
            return res.status(500).send({ error, msg: 'No se ha podido validar la autoria de la publicación' })
        }
    }


module.exports = { authentication, isAdmin, isAuthor }