const {Avatar} = require('../database/models');
const fs = require('fs');

const PUBLIC_URL = process.env.HOST + process.env.PORT;
const MEDIA_PATH = `${__dirname}/../storage`;

const getAvatars = async () => {
    const avatars = await Avatar.findAll();
    return avatars;
}

const getAvatarById = async (id) => {
    const avatar = await Avatar.findByPk(id);
    return avatar;
}

const createAvatar = async (file) => {
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const newAvatar = await Avatar.create(fileData);

    return newAvatar;
}

const deleteAvatar = async (id) => {
        const avatar = await Avatar.findByPk(id);

        await Avatar.destroy({
            where: {id}
        });

        const { filename } = avatar;
        const filePath = `${MEDIA_PATH}/${filename}`;

        fs.unlinkSync(filePath); 
        const data = {
            filePath,
            deleted: 1
        }
    return data;
}

module.exports = {
    getAvatars,
    createAvatar,
    getAvatarById,
    deleteAvatar
};