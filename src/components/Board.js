import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { HistoryContext } from '../context/Context';
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
    const {history, addMove} = useContext(HistoryContext)
    const current = history[history.length - 1];
    
    const renderSquare = (i) => 
        <Square value={current.squares[i]} onClick={() => addMove(i)} />   

    return (
        <div>
            {/* <Status>{updateStatus()}</Status> */}
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
