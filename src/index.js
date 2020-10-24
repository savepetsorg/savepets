import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

(function () {
  if (process.env.NODE_ENV === "development") {
    return module.hot.accept();
  }
})();
