const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// creating a user;

const createNewUser = async (req, res) => {
    const { body } = req;

    try {
        const queriedUser = await User.findOne({email: body.email});
        if (queriedUser) {
            console.log(queriedUser);
            res.status(400).json({errMsg: "this user already exists"});
            return;
        }
    } catch (error) {
        res.status(400).json(error);
    }

    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    catch (error) {
        res.status(400).json(error);
    }
};

// login user:

const login = async(req, res) => {
    const { body } = req;
    if (!body.email) {
        res.status(400).json({error: "No email provided - please provide email"});
        return;
    }

    let userQuery;
    try {
        userQuery = await User.findOne({ email: body.email});
        if (userQuery === null) {
            res.status(400).json({ msg: "email not found"});
        }
    } catch (error) {
        res.status(400).json(error);
    }

    const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);

    if(!passwordCheck) {
        res.status(400).json({error: "email and password do not match"});
        return;
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