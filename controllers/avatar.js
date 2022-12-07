const avatarService = require('../services/avatar.js')

 const getAvatars = async (req, res) => {
    try {
        const avatars = await avatarService.getAvatars();
        res.status(200).json(avatars);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getAvatarById = async (req, res) => {
    try {
        const avatar = await avatarService.getAvatarById(req.params.id);
        if (avatar) {
            res.status(200).json(avatar);
        } else {
            res.status(404).json({error: 'Avatar not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createAvatar = async (req, res) => {
    try {
        const {file} = req;
        
        const avatar = await avatarService.createAvatar(file); 
        res.status(200).json(avatar);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message});
    }
};


const deleteAvatar = async (req, res) => {
    try {
        const data = await avatarService.deleteAvatar(req.params.id)
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({error: 'Avatar not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {getAvatars, createAvatar, getAvatarById, deleteAvatar};