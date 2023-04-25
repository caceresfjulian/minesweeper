import moment, { Moment } from "moment";
import { nanoid } from "nanoid";

type Record = {
  id: string;
  size: number;
  time: number;
  date: string;
};

type RecordsInterface = {
  getRecords: () => Record[];
  setRecords: (data: { size: number; initTime: Moment }) => void;
};

const recordsInterface: RecordsInterface = {
  getRecords() {
    const records: Record[] = JSON.parse(
      localStorage.getItem("MINESWEEPER_RECORDS") ?? "[]"
    );
    return records;
  },

  setRecords({ size, initTime }) {
    const storedRecords = this.getRecords();
    storedRecords.push({
      id: nanoid(),
      size: size,
      time: moment().diff(initTime, "seconds"),
      date: new Date().toISOString(),
    });

    localStorage.setItem("MINESWEEPER_RECORDS", JSON.stringify(storedRecords));
  },
};

export default recordsInterface;
