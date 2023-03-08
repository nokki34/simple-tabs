import { useEffect, useState } from "react";
import "./App.css";
import TabEditor from "./TabEditor";

export default function App() {
  const [currentTabs, setCurrentTabs] = useState();
  const [tabs, setTabs] = useState(
    JSON.parse(localStorage.getItem("tabs")) || {}
  );

  const handleSave = (maybeId, { title, lyrics }) => {
    let id = maybeId;
    if (!id) {
      const lastId = localStorage.getItem("last-id") || 0;
      id = Number(lastId) + 1;
      localStorage.setItem("last-id", id);
    }

    setTabs((prev) => {
      return { ...prev, [id]: { id, title, lyrics } };
    });

    setCurrentTabs(undefined);
  };

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  if (currentTabs) {
    console.log(currentTabs);
    return (
      <TabEditor
        id={currentTabs.id}
        initialInput={currentTabs.lyrics}
        initialTitle={currentTabs.title}
        onSave={handleSave}
      />
    );
  }
  return (
    <div className="App">
      <button onClick={() => setCurrentTabs({})}>+ New</button>
      <div className="tabs-list">
        {Object.values(tabs).map((it) => (
          <div onClick={() => setCurrentTabs(it)}>{it.title}</div>
        ))}
      </div>
    </div>
  );
}
