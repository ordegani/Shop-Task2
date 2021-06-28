import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={() => history.push("/")}>Go home</button>
    </div>
  );
}
