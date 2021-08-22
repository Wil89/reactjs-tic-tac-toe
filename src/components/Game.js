import React from 'react'
import styled from 'styled-components'
import { Board } from './Board';

const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const GameBoard = styled.div`

`;

export const Game = () => {
    return (
        <div>
            <GameContainer>
                <GameBoard>
                    <Board/>
                </GameBoard>
            </GameContainer>
        </div>
    )
}
