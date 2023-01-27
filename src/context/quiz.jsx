import { createContext, useReducer } from "react"
import questions from '../data/question'


const STADGES = ['Start', 'Playing', 'End']

const initialState = {
    gameState: STADGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizRuducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameState: STADGES[1],
            };
        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            };
        case 'CHANGE_QUESTION':
            const nexQuestion = state.currentQuestion + 1;
            let endGame = false;

            if (!questions[nexQuestion]) {
                endGame = true
            }
            return {
                ...state,
                currentQuestion: nexQuestion,
                gameState: endGame ? STADGES[2] : state.gameState,
                answerSelected: false,
            }
        case 'NEW_GAME':
           return initialState;
        case 'CHECK_ANSWER':
            if (state.answerSelected) return state
            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }



        default:
            return state;
    }
}

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(quizRuducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};