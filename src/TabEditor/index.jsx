import { useEffect, useState } from "react";
import { TabViewer } from "../TabViewer";

export default function TabEditor({
  onSave,
  id,
  initialInput = "",
  initialTitle = "",
}) {
  const [input, setInput] = useState(initialInput);
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = () => {
    onSave(id, { lyrics: input, title });
  };

  useEffect(() => {
    console.log(initialInput);
    setInput(initialInput);
  }, [initialInput]);

  return (
    <div className="main">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Put your lyrics here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <div>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <TabViewer input={input} />
    </div>
  );
}
