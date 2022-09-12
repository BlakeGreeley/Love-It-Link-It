const User = require('../models/User');

// creating a user;

const createNewUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json(newUser)
    }
    catch (error) {
        res.status(400).json(error);
    }
};
// delete a user:

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then((deletedUser) => {
            res.json({ deletedUser });
        })
        .catch((err) => {res.json(400).json({err});
    });
};

// finding one Users:

const getOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then((queriedLink) => {
            res.json(queriedLink);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// finding all Users:

const getAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

module.exports = {
    createNewUser,
    deleteUser,
    getOneUser,
    getAllUsers,
};