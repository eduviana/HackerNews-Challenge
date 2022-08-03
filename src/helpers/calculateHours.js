export const calculateHours = (date) => {
  const actualDate = new Date();
  const postDate = new Date(date);

  const result = actualDate - postDate;
  return new Date(result).getHours();
};
