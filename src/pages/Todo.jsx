import React, { useEffect, useState } from "react";
import "./todo.scss";

import toast from "react-hot-toast";

import Card from "../components/card/Card";
import PlusCard from "../components/plusCard/PlusCard";

import columnApi from "../api/columnApi";
import todoApi from "../api/todoApi";

const Todo = () => {
  const [columns, setColumns] = useState([]);
  const [task, setTask] = useState([]);

  const handleAddClick = async (data) => {
    try {
      const res = await todoApi.plusTask(data);
      setTask([...task, res]);
      toast.success("Task added successfully");
    } catch (error) {
      console.error("Error Add Click: ", error);
    }
  };

  const handleMoveTask = async (data) => {
    try {
      const res = await todoApi.updateTask(data, data);
      setTask(task.map((todo) => (todo.id === res.id ? res : todo)));
      toast.success("Task Moved successfully");
    } catch (error) {
      console.error("Error Add Click: ", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const res = await todoApi.removeTask(id);
      const removeItem = task.filter((todo) => todo.id !== res.id);
      setTask(removeItem);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log("Error Delete Click: ", error);
    }
  };

  useEffect(() => {
    const getTodoColumnApp = async () => {
      try {
        const resColumn = await columnApi.getColumnLists();
        setColumns(resColumn);
      } catch (error) {
        console.log("Error getList: ", error);
      }
    };
    getTodoColumnApp();
  }, []);
  useEffect(() => {
    const getTodoTaskApp = async () => {
      try {
        const resTodo = await todoApi.getTodoLists();
        setTask(resTodo);
      } catch (error) {
        console.log("Error getList: ", error);
      }
    };
    getTodoTaskApp();
  }, []);

  return (
    <div className="todo">
      {columns.map((column) => (
        <div key={column.id} className="todo__section">
          <div className="todo__section__title">{column.title}</div>
          <div className="todo__section__content">
            <Card
              listColumn={columns}
              listItem={task.filter(
                (task) =>
                  task.status.toUpperCase() === column.title.toUpperCase()
              )}
              onClickTask={handleDeleteClick}
              onMoveTask={handleMoveTask}
            />
            <PlusCard column={column.title} onClickAddCard={handleAddClick} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
