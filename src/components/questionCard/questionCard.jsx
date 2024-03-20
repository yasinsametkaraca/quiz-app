import React, {useEffect, useState} from "react";
import "./questionCard.css";
const QuestionCard = ({ questionsData, score, setScore,count,setCount,modal,setModal }) => {
    const [timer,setTimer] = useState(30)
    console.log(questionsData.length, "questionsData")
    const approvedChoice = (e) => {
        console.log(e.currentTarget.value)
        const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer
        console.log(checkAnswer)
        if(checkAnswer){
         setScore(score+(100/questionsData.length))
        }
        setCount(count+1)
        if(count === questionsData.length) setModal(true)
        setTimer(30)
  }

  useEffect(() => {
      const interval = setInterval(() => {
          if(timer>0){
              setTimer(timer-1)
          }
          if(timer === 0 && count < questionsData.length){
              setCount(count+1)
              setTimer(30)
          } else if(count >= questionsData.length){
              setModal(true)
          }
      },1000)
            return () => {clearInterval(interval)}
  },[timer])

    return (
        questionsData.length > count ? (
            <div className="questionCard">
                <div className="questionCard-timer">{timer}</div>
                <div className="questionCard-title">
                    {count + 1}/{questionsData.length} - {questionsData[count]?.question}
                </div>
                {questionsData[count]?.answers?.map((ans, i) => (
                    <button onClick={approvedChoice} key={i} value={ans}>
                        {ans}
                    </button>
                ))}
            </div>
        ) : <></>
    );
}

export default QuestionCard;