import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Quiz from "../img/quiz.svg"
import '../css/Wellcome.css'

const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div id='wellcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para iniciar</p>
        <button onClick={() => dispatch({type:'CHANGE_STATE'})}>Iniciar</button>
        <img src={Quiz} alt='Imagens Quiz'/>
    </div>
  )
}

export default Wellcome