import React, { useState, useEffect } from "react";
import PlannerForm from "../PlannerForm/PlannerForm";
import SavedData from "../SavedData/SavedData";
import "./MonthPlanner.css";

function MonthPlanner() {
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const data = JSON.parse(localStorage.getItem("ramadanPlanner")) || {};
    setSavedData(data);
  }, []);

  // Function to save data to local storage
  const saveData = (formData) => {
    const data = { ...savedData, [formData.date]: formData };
    localStorage.setItem("ramadanPlanner", JSON.stringify(data));
    setSavedData(data);
    console.log("Data saved successfully!");
  };

  return (
    <div className="month" id="planner">
      <h1 class="plannertitle">Ramadan Daily Planner</h1>
      <div className="monthcontainer">
        <PlannerForm onSave={saveData} />
        <SavedData data={savedData} />
      </div>
    </div>
  );
}

export default MonthPlanner;
