import React from "react";
import "./questionCard.css";
const QuestionCard= ({ questionsData, score, setScore,count,setCount,modal,setModal }) => {

  return (
    <div className="questionCard">
      <div>
          {count + 1}/10 - {questionsData[count]?.question}
      </div>
        {questionsData[count]?.answers?.map((ans,i) => (
            <button key={i} value={ans}>{ans}</button>
        ))}
    </div>
  )
}

export default QuestionCard;