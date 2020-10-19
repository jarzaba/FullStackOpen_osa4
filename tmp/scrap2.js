const _ = require('lodash');

const lists = require('../utils/listsForTests');

//const mostBlogs = (bloglist) => {
//  return bloglist.map((blog) => blog.author);
//};

const mostBlogs = (bloglist) => {
  const authors = bloglist
    .map((blog) => {
      const container = {};
      container.author = blog.author;
      container.blogs = 1;
      return container;
    })
    .sort((a, b) => (a.author < b.author ? 1 : b.author < a.author ? -1 : 0))
    .reduce(
      (acc, author, idx) => {
        console.log('current value: ', author.author);
        console.log('accumulator: ', acc[idx].author);
        if (author.author === acc[idx].author) {
          author.blogs = acc[idx].blogs + 1;
          console.log(' -- lisäys blogien lukumäärään -->  ', author.blogs);
        }
        acc = acc.concat(author);
        return acc;
      },
      [{ author: '', blogs: 0 }]
    )
    .reduce((acc, current) => {
      if (_.isEmpty(acc) || current.blogs > acc.blogs) {
        acc = current;
      }
      return acc;
    }, {});
  console.log('Eniten blogeja: ', authors);
};

mostBlogs([
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Mike Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
]);

const mostLikes = (bloglist) => {
  const authors = bloglist
    .map((blog) => {
      const container = {};
      container.author = blog.author;
      container.likes = blog.likes;
      return container;
    })
    .sort((a, b) => (a.author < b.author ? 1 : b.author < a.author ? -1 : 0))
    .reduce(
      (acc, author, idx) => {
        console.log('current value: ', author.author);
        console.log('accumulator: ', acc[idx].author);
        if (author.author === acc[idx].author) {
          author.likes = author.likes + acc[idx].likes;
          console.log(' -- lisäys tykkäysten lukumäärään -->  ', author.likes);
        }
        acc = acc.concat(author);
        return acc;
      },
      [{ author: '', likes: 0 }]
    )
    .reduce((acc, current) => {
      if (_.isEmpty(acc) || current.likes > acc.likes) {
        acc = current;
      }
      return acc;
    }, {});
  console.log('Eniten tykkäyksiä: ', authors);
  return authors;
};

//mostLikes(lists.listWithManyBlogs);
