import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItems(text) {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
  }

  function handleDeletion(id) {
    setItems((prevItems) => {
      return prevItems.filter((todos, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addItems={addItems} />

      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                onChecked={handleDeletion}
                iTems={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
