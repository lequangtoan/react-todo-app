import React from "react";
import "./App.scss";

import { Toaster } from "react-hot-toast";

import Todo from "./pages/Todo";
import style from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <Todo />
        <div className={style.app__wrapper}></div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
