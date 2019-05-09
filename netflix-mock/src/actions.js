export const remove = id => {
  return {
    type: "REMOVE",
    id: id
  };
};

export const add = movie => {
  return {
    type: "ADD",
    title: movie.title,
    id: movie.id,
    img: movie.img
  };
};
