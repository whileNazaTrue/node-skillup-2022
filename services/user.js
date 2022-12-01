const {User} = require('../database/models');
const {Role} = require('../database/models');

const getUsers = async () => {
    const users = await User.findAll({
            /*include: [{
                model: Role,
                as: 'role',
                attributes: ['name', 'description']
            }],*/
            attributes: ['firstName', 'lastName', 'email', 'createdAt']
    });
    return users;
}

const getUserById = async (id) => {
    const user = await User.findByPk(id,{
        /*include: [{
            model: Role,
            as: 'role',
            attributes: ['name', 'description']
        }],*/
    });
    return user;
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({
        where: {
            email: email
        }
    });
    return user;
}

const createUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
}


const updateUser = async (id, user) => {
    const updatedUser = await User.update(user, {
        where: {
            id: id
        }
    });
    return updatedUser;
}

const deleteUser = async (id) => {
    const deletedUser = await User.destroy({
        where: {
            id: id
        }
    });
    return deletedUser;
}



module.exports = {getUsers, getUserById,getUserByEmail, createUser, updateUser, deleteUser};