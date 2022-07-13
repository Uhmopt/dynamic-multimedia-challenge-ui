import store from "store";

export const openLoading = (isOpen = false) => {
  store.dispatch({
    type: "SET_APP",
    payload: (s = {}) => ({
      ...(s ?? {}),
      isLoading: Boolean(isOpen),
    }),
  });
};
