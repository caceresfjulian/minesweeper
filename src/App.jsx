import { useState } from "react";
import InitScreen from "./components/InitScreen.jsx";
import Board from "./components/Board.jsx";
import Records from "./components/Records.jsx";

function App() {
  const [size, setSize] = useState(0);
  const [records, setRecords] = useState(false);

  const handleCreateBoard = (e) => {
    e.preventDefault();
    const {
      target: {
        elements: {
          size: { value },
        },
      },
    } = e;

    setSize(Number(value));
  };

  const toggleRecords = () => {
    setRecords((r) => !r);
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {size === 0 && !records && (
        <InitScreen
          createBoard={handleCreateBoard}
          toggleRecords={toggleRecords}
        />
      )}
      {size !== 0 && <Board size={size} setSize={setSize} />}
      {records && <Records toggleRecords={toggleRecords} />}
    </main>
  );
}

export default App;
