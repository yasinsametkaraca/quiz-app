import React, {useState} from "react"
import Dropdown from "../../components/dropdown/dropdown"
import "./intro.css"
import { useNavigate } from "react-router-dom"

const Intro = () => {
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState("")
    const TOTAL_QUESTIONS = 10
    const navigate= useNavigate()
    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }}

  return (
    <div className="intro">
      <div className="intro-container">
          <img src="https://play-lh.googleusercontent.com/Sk3qgXlM0ULQx1M9052HenpWmpFsKmb-r-NQkxjFGTBzJLyQLnBWWTELRIlrJFYH9Aw" alt="" />
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
          <div onClick={startQuiz} className="intro-btn">Start Quiz</div>
      </div>
    </div>
  )
}
export default Intro
