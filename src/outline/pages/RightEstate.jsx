import React, { useState, useEffect } from "react";

export default function RightEstate() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/JSON/estate.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(data?.questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="choose">
        <div className="chooseRight">
        <img src="/imagesFile/Image (8).png" alt="Choose Us" />
      </div>
      <div className="chooseLeft">
      <div className="dolor">
      <h3>Frequently Ask Question</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
        {questions?.map((question, index) => (
          <div className="dataKey" key={index}>
          <select name="" id="" >
            <option value="" style={{color:'#333'}}>{question.question}</option>
            <option value="">{question.answer}</option>
            </select>
          </div>
        ))}
      </div>

      
    </div>
  );
}
