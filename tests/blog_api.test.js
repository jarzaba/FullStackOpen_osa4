require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require('./test_helper');
const app = require('../app');

const api = supertest(app);
const Blog = require('../models/blogModel');

describe('When some initial notes exist', () => {
  beforeEach(async () => {
    await Blog.deleteMany({ title: { $ne: 'Canonical string reduction' } });
    await Blog.insertMany(helper.initialBlogs);
  });

  test('Blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('All blogs are returned', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body).toHaveLength(helper.initialBlogs.length + 1);
  });

  test('Blogs id field is properly defined', async () => {
    const response = await api.get('/api/blogs');

    expect(response.body[0].id).toBeDefined();
  });

  test('A specific blog is within returned blogs', async () => {
    const response = await api.get('/api/blogs');
    const title = response.body.map((r) => r.title);

    expect(title).toContain('Canonical string reduction');
  });

  describe('Viewing a specific blog', () => {
    test('a specific blog can be viewed', async () => {
      const blogsAtStart = await helper.blogsInDb();

      const blogToView = blogsAtStart[0];

      const resultBlog = await api
        .get(`/api/blogs/${blogToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const processedBlogToView = JSON.parse(JSON.stringify(blogToView));

      expect(resultBlog.body).toEqual(processedBlogToView);
    });

    test('fails with statuscode 404 if blog does not exist', async () => {
      const validNonexistingId = await helper.nonExistingId();
      await api.get(`/api/blogs/${validNonexistingId}`).expect(404);
    });

    test('fails with statuscode 400 if id is invalid', async () => {
      const invalidId = '5a422aa71b54a676234d17f';
      await api.get(`/api/blogs/${invalidId}`).expect(400);
    });
  });

  describe('Inserting a new blog', () => {
    test('A valid blog can be added ', async () => {
      const newBlog = {
        title: 'Testiotsikko',
        author: 'Ken Guru',
        url: 'http://guruken.com',
        likes: 1000,
        user: process.env.TEST_USER,
      };

      await api
        .post('/api/blogs')
        .set('Authorization', process.env.TEST_TOKEN)
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 2);

      const title = blogsAtEnd.map((r) => r.title);

      expect(title).toContain('Testiotsikko');
    });

    test('Fails with status code 400 if data invalid', async () => {
      const newBlog = {
        author: 'Ken Guru',
        url: 'http://guruken.com',
        likes: 1000,
      };

      await api
        .post('/api/blogs')
        .set('Authorization', process.env.TEST_TOKEN)
        .send(newBlog)
        .expect(400);

      const blogsAtEnd = await helper.blogsInDb();

      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);
    });

    test('If likes has no value, set its value to zero', async () => {
      const newBlog = {
        title: 'Testiotsikko',
        author: 'Ken Guru',
        url: 'http://guruken.com',
      };

      await api
        .post('/api/blogs')
        .set('Authorization', process.env.TEST_TOKEN)
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      blogInTest = blogsAtEnd[blogsAtEnd.length - 1];

      expect(blogInTest.likes).toBe(0);
    });

    test('Requires authenticated user', async () => {
      const newBlog = {
        title: 'Testiotsikko',
        author: 'Ken Guru',
        url: 'http://guruken.com',
        likes: 1000,
      };

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(401)
        .expect('Content-Type', /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);
    });
  });

  describe('Removing a blog', () => {
    test('Selected blog can be deleted', async () => {
      const blogs = await helper.blogsInDb();
      const blogToDelete = blogs[1];

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .set('Authorization', process.env.TEST_TOKEN)
        .expect(204);

      const blogsAtEnd = await helper.blogsInDb();

      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);

      const title = blogsAtEnd.map((r) => r.title);

      expect(title).not.toContain(blogToDelete.title);
    });
    test('Fails with status code 400 if data invalid', async () => {
      const invalidId = '5a3d5da59070081a82a3445';

      await api
        .delete(`/api/blogs/${invalidId}`)
        .set('Authorization', process.env.TEST_TOKEN)
        .expect(400);
    });
  });
});
afterAll(() => {
  mongoose.connection.close();
});
