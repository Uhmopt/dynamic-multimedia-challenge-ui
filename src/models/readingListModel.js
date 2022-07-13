export const getReadingList = ({ user = {}, onFinish = () => {} }) => {
  onFinish(DEFAULT_READING_LIST);
};

export const DEFAULT_READING_LIST = [
  { title: "Book Title 1", author: "Author 1" },
  { title: "Book Title 2", author: "Author 2" },
  { title: "Book Title 3", author: "Author 3" },
];
