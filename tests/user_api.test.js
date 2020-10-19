const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');
const bcrypt = require('bcryptjs');
const api = supertest(app);
const User = require('../models/userModel');

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({ username: { $ne: 'tomppa' } });

    const passwordHash = await bcrypt.hash('topsecret', 10);
    const user = new User({
      username: 'hilkka',
      name: 'TestaajaHilkka',
      passwordHash,
    });

    await user.save();

    // const user_2 = new User({
    //   username: 'TestiTommi',
    //   name: 'Tommi Testaaja',
    //   passwordHash_2,
    // });

    // await user_2.save();
  });

  test('creation succeeds with a fresh username and valid credentials', async () => {
    const usersAtStart = await helper.usersInDb();
    const newUser = {
      username: 'jarkkob',
      name: 'Jarkko Bamberg',
      password: 'topsecret',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });

  test('creation fails with proper statuscode and message if username is too short or does not exist', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {};
    const usernameExists = () => (Math.random() < 0.5 ? true : false);

    if (usernameExists()) newUser.username = 'tp';
    newUser.user = 'tpuser';
    newUser.password = 'salainen';

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('User validation failed: username');

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if password is invalid', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {};
    const passwordExists = () => (Math.random() < 0.5 ? true : false);
    if (passwordExists()) newUser.password = 'pw';
    newUser.username = 'tpao';
    newUser.name = 'tpuser';

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('malformatted password');

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'tomppa',
      name: 'SuperTomppa',
      password: 'salainen',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('`username` to be unique');

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});
afterAll(() => {
  mongoose.connection.close();
});
