export const getTabs = () => JSON.parse(localStorage.getItem("tabs"));

export const editTab = (id, tab) => {
  const tabs = getTabs();
  tabs[id] = tab;
  localStorage.setItem("tabs", JSON.stringify(tabs));
};

export const createTab = () => {
  const lastId = localStorage.getItem("last-id") || 0;
  const id = Number(lastId) + 1;
  localStorage.setItem("last-id", id);

  const tab = { id, lyrics: "", title: "" };
  editTab(id, tab);
  return tab;
};
