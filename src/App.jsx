import { useState, useMemo } from "react";
import tools from "./tools.json";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(tools.map((t) => t.Category))],
    []
  );

  const filtered = active === "All" ? tools : tools.filter((t) => t.Category === active);

  return (
    <div className="app">
      <h1>My Tools</h1>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((tool) => (
          <a key={tool.Url} href={tool.Url} target="_blank" rel="noopener noreferrer" className="card">
            <span className="category">{tool.Category}</span>
            <h2>{tool.ToolName}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}