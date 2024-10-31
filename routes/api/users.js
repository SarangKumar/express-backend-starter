import express from "express"
import User from "../../models/User.js"

const router = express.Router()

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post("/", async (req, res) => {
    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "User already exists" }] })
        }

        user = new User({
            name,
            email,
            password,
        })

        await user.save()

        res.send("User registered")
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})

export default router
