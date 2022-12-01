const userService = require('../services/user.js');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: 'User not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createUser = async (req, res) => {
    try {
        const u = await userService.getUserByEmail(req.body.email);
        if (u) {
            res.status(403).json({error: 'El email ya existe'});
        } else {
            user = await userService.createUser(req.body);
            res.status(201).json(user);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
//role id placeholder for later
const updateUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password, avatar, roleId} = req.body;
        if (!firstName && !lastName && !email && !password && !avatar && !roleId) {
            res.status(500).json({error: "No data was provided"});
        }else{
            const user = await userService.updateUser(req.params.id, req.body);
            if (user) {
                const updated = await userService.getUserById(req.params.id);
                res.status(200).json(updated);
            } else {
                res.status(404).json({error: 'User not found'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (user) {
            res.status(200).json({message: 'User deleted'});
        } else {
            res.status(404).json({error: 'User not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser};

