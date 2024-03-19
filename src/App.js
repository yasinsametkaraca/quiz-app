import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Intro from "./pages/intro/intro"
import Quiz from "./pages/quiz/quiz"


function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/quiz/:diffuculty/:amount" element={<Quiz />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App
