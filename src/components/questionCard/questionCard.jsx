import React from "react";
import "./questionCard.css";
const QuestionCard= ({ questionsData, score, setScore,count,setCount,modal,setModal }) => {
 console.log(count)

  return (
    <div className="questionCard">
      <div>fsdf
          {1 + 1}/10 - {questionsData[0]?.question}
      </div>
        {questionsData[0]?.answers?.map((ans,i) => (
            <button key={i} value={ans}> {ans}

            </button>
        ))}
    </div>
  )
}

export default QuestionCard;