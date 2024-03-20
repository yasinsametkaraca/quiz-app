import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import * as api from "../../api/api"
import "./quiz.css"
import QuestionCard from "../../components/questionCard/questionCard";
import Modal from "../../components/modal/modal";

const Quiz = () => {
    const url = window.location.pathname.split('/');
    const difficulty = url[2];
    const amount = url[3];
    const [questionsData, setQuestionsData] = useState([
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Sports",
            "question": "When was the FC Schalke 04 founded?",
            "correct_answer": "1904",
            "incorrect_answers": [
                "1909",
                "2008",
                "1999"
            ],
            "answers": [
                "1909",
                "1999",
                "1904",
                "2008"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Entertainment: Film",
            "question": "At the end of the 2001 film &quot;Rat Race&quot;, whose concert do the contestants crash?",
            "correct_answer": "Smash Mouth",
            "incorrect_answers": [
                "Bowling for Soup",
                "Sum 41",
                "Linkin Park"
            ],
            "answers": [
                "Linkin Park",
                "Smash Mouth",
                "Bowling for Soup",
                "Sum 41"
            ]
        }
    ])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [modal,setModal] = useState(false)

    useEffect(async ()=>{
        const getData = async () => {
            const data=await api.fetchQuizData(difficulty,amount)
            setQuestionsData(data)
        }
        await getData()
    },[difficulty,amount])

    console.log(questionsData, "questionsData")
  return (
    <div className="quiz">
        {
            modal ? <Modal score={score}/>:
                <QuestionCard
                    questionsData={questionsData}
                    score={score}
                    setScore={setScore}
                    count={count}
                    setCount={setCount}
                    modal={modal}
                    setModal={setModal}
                />
        }
    </div>
  )
}
export default Quiz