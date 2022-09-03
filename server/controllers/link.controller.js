const Link = require("../models/link.models");

// creating a new link page:

const createNewLink = (req, res) => {
    Link.create(req.body)
        .then((newLink) => {
            res.json({newLink});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// finding one link page:

const getOneLink = (req, res) => {
    Link.findOne({_id: req.params.id})
        .then((queriedLink) => {
            res.json(queriedLink);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// finding all link pages;

const getAllLinks = (req, res) => {
    Link.find()
        .then((allLinks) => {
            res.json(allLinks);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

//updating one link:

const updateLink = (req, res) => {
    Link.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedLink) => {
            res.json({updatedLink});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

//deleting one link:

const deleteLink = (req, res) => {
    Link.deleteOne({_id: req.params.id})
        .then((deletedLink) => {
            res.json({ deletedLink });
        })
        .catch((err) => {res.json(400).json({err});
    });
};

module.exports = {
    createNewLink,
    getAllLinks,
    getOneLink,
    updateLink,
    deleteLink,
}