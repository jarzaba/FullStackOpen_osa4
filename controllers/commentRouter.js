require('dotenv').config();
const commentRouter = require('express').Router();
const { request } = require('express');
const Comment = require('../models/commentModel');

commentRouter.get('/', async (request, response) => {
  const comments = await Comment.find({});
  response.json(comments.map((comment) => comment.toJSON()));
});

module.exports = commentRouter;
