import { Form, redirect, useLoaderData } from "react-router-dom";
import { createTab, getTabs } from "./storage";
import "./App.css";

export async function loader() {
  return getTabs();
}

export async function action() {
  const tab = createTab();
  return redirect(`/tabs/${tab.id}`);
}

export default function App() {
  const tabs = useLoaderData();

  return (
    <div className="App">
      <Form method="POST">
        <button type="submit">+ New</button>
      </Form>
      <div className="tabs-list">
        {tabs &&
          Object.values(tabs).map((it) => (
            <a href={`/tabs/${it.id}`}>{it.title}</a>
          ))}
      </div>
    </div>
  );
}
