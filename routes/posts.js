const express = require ("express")
const PostController = require("../controllers/PostController")
const { authentication, isAdmin, isAuthor } = require("../middlewares/authentication")
const router = express.Router()

router.post("/createPost", authentication,  PostController.createPost)
router.get("/getAllpost",PostController.getAll)
router.get("/getPostByName/:name",PostController.getPostByName)
router.get("/getById/:_id",PostController.getById)
router.put("/update/:_id",authentication,isAuthor, PostController.update)
router.delete("/deletePost/:_id",authentication, PostController.delete)
router.put('/comments/:_id',authentication, PostController.insertComment)                                          
router.put('/likes/:_id', authentication, PostController.like);
router.delete("/dislike/:_id",authentication, PostController.dislike)
module.exports = router