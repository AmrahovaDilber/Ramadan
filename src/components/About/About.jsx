import React from "react";
import "../About/About.css";
import Quotes from "../Quotes/Quotes";
import Box from "../Box/Box";
export default function About() {
  return (
    <div className="about" id="quote">
      <div className="aboutcontainer">
        <div className="aboutleft">
          <h2 className="hadith">Some quotes about Ramadan and Islam</h2>
          <Quotes />
        </div>
        <div className="aboutright">
          <h2 className="day">Daily things in Ramadan</h2>
          <Box></Box>
          
        </div>
      </div>
    </div>
  );
}
