import React from "react";
import Post from "./Post";

const category = "Post da semana";

function App() {
  return (
    <>
      <h1>Componente App</h1>
      <h2>{category}</h2>

      <hr />
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default App;
