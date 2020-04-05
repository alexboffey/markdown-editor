import "./style/index.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import { render } from "../crate/src/lib.rs";
import { defaultMarkdown } from "./assets";

/**
 * TODOS
 *
 * good editor component
 */

const getDefaultValue = () => {
  const cache = localStorage.getItem("cached-markdown");

  if (cache !== null) {
    return cache;
  }

  return defaultMarkdown;
};

const Root: React.FC<{}> = () => {
  const defaultValue = getDefaultValue();

  const [html, setHtml] = useState<string>(render(defaultValue));

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtml(render(e.target.value));

    localStorage.setItem("cached-markdown", e.target.value);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="bg-blue-900 py-2 px-4 shadow-lg z-10">
        <h1 className="text-white tracking-widest text-lg m-0">
          Markdown Editor
        </h1>
      </header>
      <main className="main">
        <textarea
          className="editor"
          defaultValue={defaultValue}
          onChange={handleOnChange}
        />
        <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
