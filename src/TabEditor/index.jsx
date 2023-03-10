import { useState } from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { TabViewer } from "../TabViewer";
import { editTab, getTabs } from "../storage";
import "./styles.css";

export async function loader({ params }) {
  const tabs = getTabs();
  const tab = tabs[params.id];
  return { tab };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  editTab(params.id, updates);
  return redirect("/");
}

export default function TabEditor() {
  const { tab } = useLoaderData();

  const [input, setInput] = useState(tab.lyrics);
  const [title, setTitle] = useState(tab.title);

  return (
    <div className="TabEditor main">
      <div className="input">
        <Form method="POST">
          <textarea
            name="lyrics"
            placeholder="Put your lyrics here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div>
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Save</button>
          </div>
        </Form>
      </div>
      <TabViewer input={input} />
    </div>
  );
}
