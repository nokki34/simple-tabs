import App, { loader as appLoader, action as appAction } from "./App";

import TabEditor, {
  loader as tabLoader,
  action as tabAction,
} from "./TabEditor";

export const routes = [
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    action: appAction,
  },
  {
    path: "tabs/:id",
    element: <TabEditor />,
    loader: tabLoader,
    action: tabAction,
  },
];
