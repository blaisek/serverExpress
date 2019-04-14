"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const movies = require("../../movie.json");
exports.movieRouter = express.Router()
    .get('/', (req, res) => {
    res.json({ movies: movies });
})
    .get('/:id', (req, res) => {
    res.json({ movie: { title: 'Movie' + req.param('id') } });
})
    .post('/', (req, res) => {
    res.json({ message: 'Movie created', movie: { title: 'NewMovie' } });
})
    .put('/:id', (req, res) => {
    res.json({ message: 'Movie created' });
})
    .delete('/delete', (req, res) => {
    res.json({ message: 'Movie deleted' });
});
