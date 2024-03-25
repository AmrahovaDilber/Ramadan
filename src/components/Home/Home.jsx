// Home.js
import React from "react";
import "../Home/Home.css";
import About from "../About/About";
import MonthPlanner from "../MonthPlanner/MonthPlanner";
import Navbar from "../Navbar/Navbar";
import BackToTop from "../BackToTop/BackToTop";
export default function Home() {
  return (
    <div className="home" id="home">
      <Navbar />
      <div className="homecontainer">
        <div className="left">
          <p className="title">Ramadan</p>

          <p className="description">
            Ramadan is the ninth month of the Islamic lunar calendar, observed
            by Muslims worldwide as a month of fasting, prayer, reflection, and
            community. It commemorates the first revelation of the Quran to
            Prophet Muhammad and fosters spiritual growth, empathy, and
            solidarity among believers.
          </p>
        </div>
        <div className="right">
          <div className="rightbox">
            <p> إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <p>اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَۙ</p>
            <p>الله أكبر</p>
          </div>
        </div>
      </div>
      <About />
      <MonthPlanner />{" "}
      <BackToTop></BackToTop>
    </div>
  );
}
