import React, {useState} from 'react'
import styled from 'styled-components'
import { winnerCheck } from '../utils/helper';
import { Square } from './Square'

const Status = styled.div`
    margin-bottom: 10px;
`;

const BoardRow = styled.div`
    &:after{
        clear: both;
        content: "";
        display: table;
    }
`;

export const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    
    const handleClick = (i) => {
        if(winnerCheck(squares) || squares[i]){
            return;
        }
        const newSquare = squares.slice();
        newSquare[i] = isXNext ? 'X' : 'O';
        setSquares(newSquare);
        setIsXNext(!isXNext);
    }

    const renderSquare = (i) => 
        <Square value={squares[i]} onClick={()=>handleClick(i)} />
    
    const updateStatus = () => {
        const winner = winnerCheck(squares);
        const nextPlayer = isXNext ? 'X' : 'O';
        return winner ? `Winner: ${winner}`: `Next Player: ${nextPlayer}`; 
    }    

    return (
        <div>
            <Status>{updateStatus()}</Status>
            <BoardRow>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </BoardRow>
            <BoardRow>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </BoardRow>
            <BoardRow>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </BoardRow>
        </div>
    )
}
