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

const mostBlogs = (bloglist) => {
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

console.log(favoriteBlog());

const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});
