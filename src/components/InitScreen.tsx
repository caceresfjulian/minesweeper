import { InitForm } from "../App.types";

type InitScreenProps = {
  createBoard: (e: InitForm) => void;
  toggleRecords: () => void;
};

export default function InitScreen({
  createBoard,
  toggleRecords,
}: InitScreenProps): JSX.Element {
  return (
    <>
      <h1>Minesweeper</h1>
      <h6>By Julian Caceres</h6>
      <div style={{ maxWidth: "1080px", marginTop: "24px" }}>
        <ul>
          <li>Left-click on a square to reveal what is underneath it.</li>
          <li>Right-click on a square to flag it as a mine. </li>
          <li>
            Use logic and deduction to uncover all the safe squares on the board
            without detonating any of the mines.
          </li>
        </ul>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            marginTop: "40px",
          }}
          onSubmit={createBoard}
        >
          <select name="size">
            <option value="16">16 x 16</option>
            <option value="8">8 x 8</option>
            <option value="5">5 x 5</option>
          </select>
          <div style={{ display: "flex", marginTop: "15px", gap: "15px" }}>
            <button type="submit">Start game</button>
            <button type="button" onClick={toggleRecords}>
              Highest records
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
