const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (bloglist) => {
  const reducer = (sum, item) => sum + item;
  return bloglist.map((blog) => blog.likes).reduce(reducer, 0);
};

const favoriteBlog = (bloglist) => {
  const mappedList = bloglist.map((blog) =>
    JSON.parse(
      `{"title": "${blog.title}", "author": "${blog.author}", "likes": ${blog.likes}}`
    )
  );
  const result = mappedList.reduce(
    (acc, item) => (acc.likes > item.likes ? acc : item),
    {}
  );
  return result;
};

// Alla oleviin (mostBlogs ja mostLikes) täytyy olla yksinkertaisempikin tapa,
// mutta näillä mennään. Ja tulipa tehtyä lähes ilman kirjastoja.

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
        if (author.author === acc[idx].author) {
          author.blogs = acc[idx].blogs + 1;
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
  return authors;
};

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
        if (author.author === acc[idx].author) {
          author.likes = author.likes + acc[idx].likes;
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
  return authors;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
