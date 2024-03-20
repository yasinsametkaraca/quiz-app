import React, {useState} from "react"
import Dropdown from "../../components/dropdown/dropdown"
import "./intro.css"
import { useNavigate } from "react-router-dom"

const Intro = () => {
    const difficulty = ["easy", "medium", "hard"]
    const totalQuestionsOptions = [5, 10, 15];
    const [difficultyChange, setDifficultyChange] = useState("")
    const navigate= useNavigate()
    const [totalQuestions, setTotalQuestions] = useState(10);

    console.log(difficultyChange, "difficultyChange")
    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${totalQuestions}`)
    }}

  return (
    <div className="intro">
        <div className="intro-container">
            <img
                src="https://play-lh.googleusercontent.com/Sk3qgXlM0ULQx1M9052HenpWmpFsKmb-r-NQkxjFGTBzJLyQLnBWWTELRIlrJFYH9Aw"
                alt=""
            />
            <Dropdown data={difficulty} setChange={setDifficultyChange} placeholder={"Select a level"}/>
            <Dropdown data={totalQuestionsOptions} setChange={setTotalQuestions} placeholder={"Select a total question"}/>
            <div onClick={startQuiz} className="intro-btn">Start Quiz</div>
        </div>
    </div>
  )
}
export default Intro
