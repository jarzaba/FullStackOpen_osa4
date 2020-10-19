require('dotenv').config();
const blogRouter = require('express').Router();
const { request } = require('express');
const jwt = require('jsonwebtoken');
const Blog = require('../models/blogModel');
const User = require('../models/userModel');

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
  response.json(blogs.map((blog) => blog.toJSON()));
});

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog.toJSON());
  } else {
    response.status(404).end();
  }
});

blogRouter.post('/', async (request, response) => {
  const body = request.body;
  const token = request.token;

  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    author: body.author,
    title: body.title,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  if (!blog.title || !blog.url) {
    return response.status(400).json({ error: 'author, title or url missing' });
  }
  !blog.likes ? (blog.likes = 0) : blog.likes;
  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  response.json(savedBlog.toJSON());
});

blogRouter.delete('/:id', async (request, response) => {
  const token = request.token;

  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);
  const blog = await Blog.findById(request.params.id);

  if (blog.user.toString() === user._id.toString()) {
    const deletedBlog = await Blog.findByIdAndRemove(request.params.id);
    if (deletedBlog) {
      response.status(204).end();
    } else {
      response.status(404).end();
    }
  } else {
    response
      .status(401)
      .json({ error: 'no authorization to delete this blog' });
  }
});

blogRouter.put('/:id', async (request, response) => {
  const likes = request.body.likes;

  if (likes == null) {
    return response.status(400).json({ error: 'likes missing' });
  }
  const blog = await Blog.findByIdAndUpdate(
    request.params.id,
    { likes: likes },
    { new: true }
  );
  if (blog) {
    response.status(200).json(blog.toJSON());
  } else {
    response.status(404).end();
  }
});

module.exports = blogRouter;
