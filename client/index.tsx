import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

// @ts-ignore
import { render } from "../crate/src/lib.rs";
import { defaultMarkdown } from "./assets";

const Root: React.FC<{}> = () => {
  const [html, setHtml] = useState<string>(render(defaultMarkdown));

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHtml(render(e.target.value));
    },
    []
  );

  return (
    <>
      <textarea
        defaultValue={defaultMarkdown}
        style={{ width: "100%" }}
        rows={4}
        onChange={handleOnChange}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
