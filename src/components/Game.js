import React, { useContext } from "react";
import styled from "styled-components";
import { HistoryContext } from "../context/Context";
import { winnerCheck } from "../utils/helper";
import { Board } from "./Board";
import { Steps } from "./Steps";

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div``;

const Status = styled.div`
  margin-bottom: 10px;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

const StyledOL = styled.ol`
  padding-left: 30px;
`;

export const Game = () => {
  const { history, isXNext, jumpTo, stepNumber } = useContext(HistoryContext);

  const squares = history[stepNumber].squares;

  const getStatus = () => {
    //const squares = history[history.length - 1].squares;
    const winner = winnerCheck(squares);
    const nextPlayer = isXNext ? "X" : "O";
    return winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`;
  };

  return (
    <div>
      <GameContainer>
        <GameBoard>
          <Board />
        </GameBoard>
        <GameInfo>
          <Status data-testid='status'>{getStatus()}</Status>
          <StyledOL>
            {history.map((step, move) => (
              <Steps key={move} move={move} onClick={jumpTo} />
            ))}
          </StyledOL>
        </GameInfo>
      </GameContainer>
    </div>
  );
};
