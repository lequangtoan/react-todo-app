import React from "react";
import "./App.scss";

import { Toaster } from "react-hot-toast";

import Header from "./components/header/Header";
import Todo from "./pages/Todo";
// import style from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="header" style={{ padding: "50px" }}>
        <Header />
        <div>
          <Todo />
        </div>
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
