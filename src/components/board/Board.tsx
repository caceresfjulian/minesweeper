import React, { type ChangeEvent, useState } from "react";
import revealNeighbors from "../../utils/revealNeighbors";
import TimeKeeper from "../timeKeeper/TimeKeeper";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store";
import {
  revealTile,
  updateGame,
  loseGame,
  addFlag,
  removeFlag,
  resetGame,
  keepPlaying,
} from "../../features/board/boardSlice";
import {
  BoardContainer,
  Button,
  Cell,
  Header,
  MobileLabel,
  Row,
} from "./Board.styles";
import { BaseH2, BaseH3 } from "../lib/common.styles";
import Checkbox from "../lib/Checkbox";
import GameOverModal from "../gameOverModal/GameOverModal";

export default function Board(): JSX.Element {
  const [markFlags, setMarkFlags] = useState<boolean>(false);
  const { game, board, mines, flags, isWinner, didLose, isLoser } = useSelector(
    (state: RootState) => state.board
  );
  const dispatch = useDispatch();

  const handleClick = (i: number, j: number): void => {
    if (markFlags) {
      handleRightClick(i, j);
      return;
    }

    if (isWinner) {
      return;
    }

    if (board[i][j] === "x" && game[i][j] !== 2) {
      dispatch(loseGame());
      return;
    }

    if (game[i][j] === 1 || game[i][j] === 2) {
      return;
    }

    dispatch(revealTile([i, j]));
    dispatch(updateGame(revealNeighbors([i, j], board, game)));
  };

  const handleRightClick = (i: number, j: number): void => {
    if (isWinner || game[i][j] === 1) {
      return;
    }

    if (game[i][j] === 2) {
      dispatch(removeFlag([i, j]));
      return;
    }

    if (game[i][j] === 0) {
      dispatch(addFlag([i, j]));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMarkFlags(e.target.checked);
  };

  return (
    <>
      {isWinner && (
        <>
          <BaseH2>You won!</BaseH2>
        </>
      )}
      {!isWinner && (
        <Header>
          <BaseH3>{`Unmarked mines: ${mines - flags}`}</BaseH3>
          <MobileLabel>
            Mark flags
            <Checkbox
              checked={markFlags}
              handleCheckboxChange={handleCheckboxChange}
            />
          </MobileLabel>
        </Header>
      )}
      <TimeKeeper stop={isWinner || didLose} />
      {isLoser && didLose && (
        <GameOverModal
          keepPlaying={() => dispatch(keepPlaying())}
          resetGame={() => dispatch(resetGame())}
        />
      )}
      {
        <BoardContainer>
          {board.map((row, i) => (
            <Row key={i}>
              {row.map((value, j) => (
                <Cell
                  key={j}
                  isWinner={isWinner}
                  revealed={String(game[i][j])}
                  onClick={() => {
                    handleClick(i, j);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                  onAuxClick={() => {
                    handleRightClick(i, j);
                  }}
                >
                  {game[i][j] === 1 ? value : "\u00A0"}
                </Cell>
              ))}
            </Row>
          ))}
        </BoardContainer>
      }
      <Button onClick={() => dispatch(resetGame())}>Main Screen</Button>
    </>
  );
}
