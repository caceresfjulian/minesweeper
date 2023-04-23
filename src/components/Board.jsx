import { useMemo, useRef, useState } from "react";
import createBoard from "../utils/createBoard";
import createMatrix from "../utils/matrix/createMatrix";
import revealNeighbors from "../utils/revealNeighbors";
import PropTypes from "prop-types";
import TimeKeeper from "./TimeKeeper";
import moment from "moment";
import recordsInterface from "../utils/recordsInterface";
import countCoincidences from "../utils/matrix/countCoincidences";

export default function Board({ size, setSize }) {
  const [game, setGame] = useState(() => createMatrix(size));
  const [isWinner, setIsWinner] = useState(false);
  const [didLose, setDidLose] = useState(false);
  const flagsRef = useRef(0);
  const stopTimeRef = useRef(false);
  const initTimeRef = useRef(moment());

  const [board, mines] = useMemo(() => {
    const mines = size === 16 ? 40 : size === 8 ? 20 : 8;
    return createBoard(size, mines);
  }, [size]);

  const handleClick = (i, j) => {
    if (isWinner) {
      return;
    }

    if (board[i][j] === "x" && game[i][j] !== 2) {
      setDidLose(true);
      stopTimeRef.current = true;
      return;
    }

    if (game[i][j] === 1 || game[i][j] === 2) {
      return;
    }

    setGame((prevGame) => {
      const newGame = [...prevGame];
      newGame[i][j] = 1;
      return newGame;
    });

    revealNeighbors([i, j], board, game, setGame);

    if (size ** 2 - mines === countCoincidences(game, 1)) {
      setIsWinner(true);
      if (!stopTimeRef.current) {
        recordsInterface.setRecords({ size, initTime: initTimeRef.current });
      }
    }
  };

  const handleRightClick = (e, i, j) => {
    if (isWinner || game[i][j] === 1) {
      return;
    }

    if (game[i][j] === 2) {
      flagsRef.current -= 1;

      setGame((prevGame) => {
        const newGame = [...prevGame];
        newGame[i][j] = 0;
        return newGame;
      });
      return;
    }

    if (game[i][j] === 0) {
      flagsRef.current += 1;

      setGame((prevGame) => {
        const newGame = [...prevGame];
        newGame[i][j] = 2;
        return newGame;
      });
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
          <h4>{`Unmarked mines: ${mines - flagsRef.current}`}</h4>
        </>
      )}
      <TimeKeeper stop={isWinner || stopTimeRef.current} />
      {didLose && (
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
              <button onClick={() => setDidLose(false)}>Keep playing</button>
              <button onClick={() => setSize(0)}>Main Screen</button>
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
                  onAuxClick={(e) => handleRightClick(e, i, j)}
                >
                  {game[i][j] === 1 ? value : "\u00A0"}
                </span>
              ))}
            </div>
          ))}
        </div>
      }
      <button onClick={() => setSize(0)} style={{ marginTop: "15px" }}>
        Main Screen
      </button>
    </>
  );
}

Board.propTypes = {
  size: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
};
