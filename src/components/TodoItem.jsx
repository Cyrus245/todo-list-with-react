import React, { useState } from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.iTems}
    </li>
  );
}

export default TodoItem;
