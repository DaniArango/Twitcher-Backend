const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Rellena tu nombre"],
      },
      email: {
        type: String,
        match: [/.+\@.+\..+/, "Correo no válido"],
       unique: true,
        required: [true, "Rellena tu correo"],
      },
      password: {
        type: String,
        required: [true, "Rellena tu contraseña"],
      },
      age: {
        type: Number,
        required: [true, "Indica tu edad"],
      },  
    role: String,
    tokens: [],
postIds: [{ type: ObjectId, ref: 'Post' }],

}, { timestamps: true });
UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;

}
const User = mongoose.model('User', UserSchema);


module.exports = User;