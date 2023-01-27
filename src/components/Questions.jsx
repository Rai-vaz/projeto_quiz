import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'
import Option from './Option'
import '../css/Questions.css'

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const question = quizState.questions[quizState.currentQuestion]
    const onSelectedOption = (option) => {
      dispatch({
        type: 'CHECK_ANSWER',
        payload: {answer: question.answer, option},
      })
    }

  return (
    <div id='question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{question.question}</h2>
        
        <div id='options-container'>
          {
            question.options.map((option) => (
              <Option
                option={option} 
                key={option} 
                answer={question.answer}
                selectOption={() => onSelectedOption(option)}
               />
            ))
          }
        </div>
        {quizState.answerSelected && <button onClick={() => dispatch({ type: 'CHANGE_QUESTION'})}>Continuar</button>}
        
    </div>
  )
}

export default Questions