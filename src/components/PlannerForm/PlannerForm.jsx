import React, { useState } from "react";
import "../PlannerForm/PlannerForm.css";

function PlannerForm({ onSave }) {
  const [date, setDate] = useState("");
  const [ibadah, setIbadah] = useState("");
  const [zikr, setZikr] = useState("");
  const [quran, setQuran] = useState("");

  const handleSave = () => {
    onSave({ date, ibadah, zikr, quran });
    // Reset form fields after saving
    setDate("");
    setIbadah("");
    setZikr("");
    setQuran("");
  };

  return (
    <div>
      <div className="plannercontainer">
        <label htmlFor="dateInput">Select Date:</label>
        <input
          type="date"
          id="dateInput"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="ibadahInput">Praying:</label>
        <textarea
          id="ibadahInput"
          rows="4"
          cols="50"
          value={ibadah}
          onChange={(e) => setIbadah(e.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="zikrInput">Zikr:</label>
        <textarea
          id="zikrInput"
          rows="4"
          cols="50"
          value={zikr}
          onChange={(e) => setZikr(e.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="quranInput">Quran:</label>
        <textarea
          id="quranInput"
          rows="4"
          cols="50"
          value={quran}
          onChange={(e) => setQuran(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default PlannerForm;
