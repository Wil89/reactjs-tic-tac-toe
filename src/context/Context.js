import { createContext, useState } from "react";
import { winnerCheck } from "../utils/helper";

const initialContext = {
    history:[{
        squares: Array(9).fill(null),
    }],
    isXNext: true,
    stepNumber: 0,
    addMove: (i) => {},
    jumpTo: (step) => {}
}

export const HistoryContext = createContext(initialContext);

export const HistoryProvider = ({children}) => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null)
    }]);
    
    const [isXNext, setIsXNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const addMove = (i) => {
        const historyCpy = history.slice(0, stepNumber + 1); 
        const current = historyCpy[historyCpy.length - 1];
        const squares = current.squares.slice();
        if(winnerCheck(squares) || squares[i]){
            return;
        }
        squares[i] = isXNext ? 'X' : 'O';
        setHistory(
            historyCpy.concat([{
                squares:squares
            }])
        )
        setIsXNext(!isXNext);
        setStepNumber(historyCpy.length);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext((step % 2) === 0)
    }

    const context = {
        history: history,
        isXNext: isXNext,
        stepNumber: stepNumber,
        addMove: addMove,
        jumpTo: jumpTo
    }

    return(
        <HistoryContext.Provider value={context}>
            {children}
        </HistoryContext.Provider>
    )
}