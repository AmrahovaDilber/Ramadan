import React from "react";
import "../Box/Box.css";
import { list } from "../../list.js";

export default function Box() {
  return (
    <div className="listcontainer">
      {list.map((item) => (
        <div className="listitem" key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt="img"></img>
        </div>
      ))}
    </div>
  );
}
