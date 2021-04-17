const express = require('express');
const router = express.Router();

// Coffee Model
const Minigolf = require('../../models/Minigolf.js');

// @route GET api/minigolf
// @desc Get all minigolf

router.get('/', (req, res) => {
    Minigolf.find()
        .then( minigolfs =>
        {   console.log('Get all');
            res.json(minigolfs);
        })
        .catch(err => res.status(400).json())
});


// @route GET api/minigolf/:id
// @desc Get minigolf that matches id

router.get('/:id', (req, res) => {
    Minigolf.findById(req.params.id)
        .then(minigolfs => {
            console.log('Id search');
            res.json(minigolfs)
        })
        .catch(err => res.status(404).json())
});