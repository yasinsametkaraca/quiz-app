import React,{useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import * as api from "../../api/api"
import "./quiz.css"
import QuestionCard from "../../components/questionCard/questionCard";

const Quiz = () => {
    const url = window.location.pathname.split('/');
    const difficulty = url[2];
    const amount = url[3];
    const [questionsData, setQuestionsData] = useState([])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [modal,setModal] = useState(false)

    useEffect(()=>{
        const getData= async () => {
            const data=await api.fetchQuizData(difficulty,amount)
            setQuestionsData(data)
        }
        getData()
    },[difficulty,amount])

    console.log(questionsData, "questionsData")
  return (
    <div className="quiz">

        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />

    </div>
  )
}
export default Quiz