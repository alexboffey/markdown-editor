import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore 
import * as wasm from "../crate/pkg/rust_parcel_bg.wasm";

const Root: React.FC<{}> = () => {

  const text = wasm.run();

  return <p>{text}</p>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
