import { useContext } from "react"
import { QuizContext } from '../context/quiz'
import '../css/GameOver.css'

import Welldone from '../img/welldone.svg'
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Potuação: x</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <img src={Welldone} alt='Foto well done'/>
        <button onClick={() => dispatch({ type:"NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver