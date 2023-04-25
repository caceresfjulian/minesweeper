import { useState } from "react";
import { InitForm } from "./App.types.js";
import Board from "./components/Board";
import InitScreen from "./components/InitScreen";
import MobileOverlay from "./components/MobileOverlay";
import Records from "./components/Records";

function App(): JSX.Element {
  const [size, setSize] = useState<number>(0);
  const [records, setRecords] = useState<boolean>(false);

  const handleCreateBoard = (e: InitForm) => {
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

  const toggleRecords = (): void => {
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
      <MobileOverlay />
    </main>
  );
}

export default App;
