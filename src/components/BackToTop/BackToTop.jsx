import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import '../BackToTop/BackToTop.css'
export default function BackToTop() {
    function handleScrollTop() {
        window.scrollTo(
            {
                top: 0,
            behavior:'smooth'}
        )
    }
  return (
    <div>
      <div className="top" onClick={handleScrollTop}>
        <FaArrowUp className="top-icon" />
      </div>
    </div>
  );
}
