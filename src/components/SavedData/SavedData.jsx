import React from "react";
import "../SavedData/SavedData.css";

function SavedData({ data }) {
  return (
    <div className="savedData">
      <h2>To Do List</h2>
      <ul>
        {Object.keys(data).map((date) => (
          <li key={date}>
            <strong>{date}</strong>:<br />
            <span>
              <strong>Praying:</strong> {data[date].ibadah}
            </span>
            <br />
            <span>
              <strong>Zikr:</strong> {data[date].zikr}
            </span>
            <br />
            <span>
              <strong>Quran:</strong> {data[date].quran}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedData;
