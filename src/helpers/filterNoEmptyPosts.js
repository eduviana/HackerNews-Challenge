export const noEmptyPosts = (posts) => {
  const postsFiltered = posts.filter((post) => {
    const { author, story_title, story_url, created_at } = post;
    if (
      typeof author === "object" ||
      typeof story_title === "object" ||
      typeof story_url === "object" ||
      typeof created_at === "object"
    ) {
      return;
    } else {
      return post;
    }
  });
  return postsFiltered;
};
