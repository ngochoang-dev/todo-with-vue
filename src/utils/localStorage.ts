export const getInLocalStorage = async (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "false");
};

export const setInLocalStorage = async (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
