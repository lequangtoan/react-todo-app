import React, { useState, useEffect } from "react";
import "./plus-card.scss";

const PlusCard = ({ column, onClickAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");

  const addTask = () => {
    if (todo === "") return;
    const Task = {
      status: column,
      title: todo.trim(),
    };
    setTodo("");
    setShowForm(!showForm);
    onClickAddCard(Task);
  };

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showForm]);

  return (
    <>
      {/* <div className="add" onClick={() => setShowForm(!showForm)}>
        PlusCard
      </div>
      {showForm ? (
        <div>
          <form>
            <input
              name="todo"
              type="text"
              placeholder="Create a new todo..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </form>
          <div className="add" onClick={() => addTask()}>
            Add Task
          </div>
          <div className="add" onClick={() => setShowForm(!showForm)}>
            Cancel
          </div>
        </div>
      ) : null} */}
      <div className="add" onClick={() => setShowForm(!showForm)}>
        PlusCard
      </div>
      {showForm ? (
        <div className="wrapper" style={{ overflow: "hidden" }}>
          <div className="container">
            <form className="form">
              <h1 className="form__Title"> Add Task </h1>
              <label htmlFor="title">
                <input
                  name="todo"
                  type="text"
                  placeholder="Create a new todo..."
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
              </label>
              <div className="buttonContainer">
                <div className="addTask" onClick={() => addTask()}>
                  Add Task
                </div>
                <div className="cancel" onClick={() => setShowForm(!showForm)}>
                  Cancel
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlusCard;
