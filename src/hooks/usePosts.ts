export const usePosts = () => {
  // all posts
  const postById = (id: number) => {
    const data = fetch(`http://localhost:4400/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    return data;
  };

  return {
    postById,
  };
};
