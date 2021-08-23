import { createContext, useState } from "react";
import { winnerCheck } from "../utils/helper";

const initialContext = {
    history:[{
        squares: Array(9).fill(null),
    }],
    isXNext: true
}

export const HistoryContext = createContext(initialContext);

export const HistoryProvider = ({children}) => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null)
    }]);
    const [isXNext, setIsXNext] = useState(true);

    const addMove = (i) => {
        const historyCpy = history; 
        const current = history[history.length - 1];
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
    }

    const context = {
        history: history,
        isXNext: isXNext,
        addMove: addMove
    }

    return(
        <HistoryContext.Provider value={context}>
            {children}
        </HistoryContext.Provider>
    )
}