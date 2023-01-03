const express = require ("express")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()

router.post("/createUser",UserController.createUser)
router.get("/getAllusers",UserController.getAllUsers)
router.get("/getUserByName/:name",UserController.getUserByName)
router.get("/getUserById/:_id",UserController.getUserById)
router.put("/userUpdate/:_id", UserController.updateUser)
router.post("/loginUser",UserController.login)
router.delete("/logoutUser",authentication, UserController.logout)
router.get('/info',authentication, UserController.getInfo)

module.exports = router