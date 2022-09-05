import React from "react";
import "./card.scss";

const Card = ({ listColumn, listItem, onClickTask, onMoveTask }) => {
  const handleEditClick = (data, card) => {
    if (!data) return;
    const newData = {
      id: card,
      status: data,
    };
    console.log("new data", newData);
    onMoveTask(newData);
  };

  const handleDeleteClick = (id) => {
    if (!onClickTask) return;
    onClickTask(id);
  };

  return (
    <>
      {listItem.map((card) => (
        <div key={card.id} className="card">
          <div className="card__content">{card.title}</div>
          <div className="card__features">
            <select onChange={(e) => handleEditClick(e.target.value, card.id)}>
              <option>Move to </option>
              {listColumn
                .filter(
                  (Column) =>
                    Column.title.toUpperCase() !== card.status.toUpperCase()
                )
                .map((Column) => (
                  <option key={Column.id} value={Column.title}>
                    Move to {Column.title}
                  </option>
                ))}
            </select>
            <button
              className="btn__delete"
              onClick={() => handleDeleteClick(card.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
