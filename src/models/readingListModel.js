import { serverGet, serverPost } from "./serverHelper";

export const getReadingList = ({ user = {}, onFinish = () => {} }) => {
  serverGet({
    url: "reading-list",
    data: { user_id: user?.id },
    onFinish: onFinish,
    // onError: (err) => onFinish(false, err),
  });
};

export const saveReadingList = ({ data = {}, onFinish = () => {} }) => {
  serverPost({
    url: `reading-list/${data?.id ? "update" : "create"}`,
    data: data,
    onFinish: onFinish,
    // onError: (err) => onFinish(false, err),
  });
};

export const deleteReadingList = ({ data = {}, onFinish = () => {} }) => {
  serverPost({
    url: `reading-list/delete/${data?.id}`,
    // data: data,
    onFinish: onFinish,
    // onError: (err) => onFinish(false, err),
  });
};

export const DEFAULT_READING_LIST = [
  { title: "Book Title 1", author: "Author 1" },
  { title: "Book Title 2", author: "Author 2" },
  { title: "Book Title 3", author: "Author 3" },
];
