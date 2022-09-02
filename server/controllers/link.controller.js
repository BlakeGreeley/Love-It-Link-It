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
//do next.

//deleting one link:
//do after update.

module.exports = {
    createNewLink,
    getAllLinks,
    getOneLink,
}