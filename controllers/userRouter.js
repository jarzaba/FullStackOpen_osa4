const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

userRouter.post('/', async (request, response) => {
  const body = request.body;
  if (body.password === undefined || body.password.length < 3) {
    return response.status(400).json({ error: 'malformatted password' });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', { title: 1, url: 1 });
  response.json(users.map((u) => u.toJSON()));
});

module.exports = userRouter;
