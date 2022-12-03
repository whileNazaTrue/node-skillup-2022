const {User} = require('../database/models');
const {Role} = require('../database/models');

const getUsers = async (page) => {
    let flag = true;
    let previous, next;

    let validatedPage = +page;
    if (validatedPage < 0) {
        validatedPage = 0;
    }

    const {count, rows} = await User.findAndCountAll({
            /*include: [{
                model: Role,
                as: 'role',
                attributes: ['name', 'description']
            }],*/
            attributes: ['firstName', 'lastName', 'email', 'createdAt'],
            limit: 10,
            offset: validatedPage * 10
    });
    
    if (!rows || rows.length === 0) {
        flag = false;
    }

    const maxPage = +count / (10) 
    previous = validatedPage == 0 ? null : (process.env.HOST + ""+ process.env.PORT) +`/api/users?page=${validatedPage-1}`;
    next = rows.length < 10 || validatedPage+1 == maxPage ? null :(process.env.HOST + ""+ process.env.PORT) +`/api/users?page=${validatedPage+1}`;

    return {count, rows, flag, previous, next};
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