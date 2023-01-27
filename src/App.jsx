import { useContext } from 'react'
import { QuizContext } from './context/quiz.jsx'
import { useEffect } from "react"
import Wellcome from './components/Wellcome'
import Questions from './components/Questions'
import GameOver from './components/GameOver.jsx'
import './css/App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    //embaralhar
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameState === 'Start' && <Wellcome/>}
      {quizState.gameState === 'Playing' && <Questions/>}
      {quizState.gameState === 'End' && <GameOver/>}

    </div>
  )
}

export default App
