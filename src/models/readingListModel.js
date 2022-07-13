export const getReadingList = ({ user = {}, onFinish = () => {} }) => {
  setTimeout(() => {
    onFinish(DEFAULT_READING_LIST);
  }, 3000);
};

export const saveReadingList = ({ data = {}, onFinish = () => {} }) => {
  setTimeout(() => {
    onFinish(true);
  }, 3000);
};

export const deleteReadingList = ({ data = {}, onFinish = () => {} }) => {
  setTimeout(() => {
    onFinish(true);
  }, 3000);
};

export const DEFAULT_READING_LIST = [
  { title: "Book Title 1", author: "Author 1" },
  { title: "Book Title 2", author: "Author 2" },
  { title: "Book Title 3", author: "Author 3" },
];
