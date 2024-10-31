export const getUsers = (req, res) => {
    res.send("Get all users")
}

export const getUserById = (req, res) => {
    const { id } = req.params
    res.send(`Get user with ID: ${id}`)
}
