import { Board } from "../utils/Types";
import revealNeighbors from "../utils/revealNeighbors";
import TimeKeeper from "./TimeKeeper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  revealTile,
  updateGame,
  loseGame,
  addFlag,
  removeFlag,
  resetGame,
  keepPlaying,
} from "../features/board/boardSlice";

export default function Board() {
  const { game, board, mines, flags, isWinner, didLose, isLoser } = useSelector(
    (state: RootState) => state.board
  );
  const dispatch = useDispatch();

  const handleClick = (i: number, j: number) => {
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

  const handleRightClick = (i: number, j: number) => {
    if (isWinner || game[i][j] === 1) {
      return;
    }

    if (game[i][j] === 2) {
      dispatch(removeFlag([i, j]));
      return;
    }

    if (game[i][j] === 0) {
      dispatch(addFlag([i, j]));
      return;
    }
  };

  return (
    <>
      {isWinner && (
        <>
          <h2>Congratulations!</h2>
        </>
      )}
      {!isWinner && (
        <>
          <h4>{`Unmarked mines: ${mines - flags}`}</h4>
        </>
      )}
      <TimeKeeper stop={isWinner || didLose} />
      {isLoser && didLose && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "500px",
              height: "250px",
              padding: "35px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>Game over</h2>
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              If you keep playing, your game time won&apos;t be registered
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => dispatch(keepPlaying())}>
                Keep playing
              </button>
              <button onClick={() => dispatch(resetGame())}>Main Screen</button>
            </div>
          </div>
        </div>
      )}
      {
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "5px solid black",
          }}
        >
          {board.map((row, i) => (
            <div key={i}>
              {row.map((value, j) => (
                <span
                  key={j}
                  style={{
                    display: "inline",
                    border: "1px solid gray",
                    padding: "0 10px",
                    cursor: `${
                      isWinner
                        ? "not-allowed"
                        : game[i][j]
                        ? "default"
                        : "pointer"
                    }`,
                    color: `${game[i][j] === 1 ? "black" : "lightgray"}`,
                    backgroundColor: `${game[i][j] === 2 ? "pink" : "unset"}`,
                  }}
                  onClick={() => handleClick(i, j)}
                  onContextMenu={(e) => e.preventDefault()}
                  onAuxClick={() => handleRightClick(i, j)}
                >
                  {game[i][j] === 1 ? value : "\u00A0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      }
      <button
        onClick={() => dispatch(resetGame())}
        style={{ marginTop: "15px" }}
      >
        Main Screen
      </button>
    </>
  );
}
