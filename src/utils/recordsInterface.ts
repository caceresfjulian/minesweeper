import moment, { type Moment } from "moment";
import { nanoid } from "nanoid";

interface Record {
  id: string;
  size: number;
  difficulty: string;
  time: number;
  date: string;
}

interface RecordsInterface {
  getRecords: () => Record[];
  setRecords: (data: {
    size: number;
    difficulty: string;
    initTime: Moment;
  }) => void;
}

const recordsInterface: RecordsInterface = {
  getRecords() {
    const records: Record[] = JSON.parse(
      localStorage.getItem("MINESWEEPER_RECORDS") ?? "[]"
    );
    return records;
  },

  setRecords({ size, difficulty, initTime }) {
    const storedRecords = this.getRecords();
    const newRecord = {
      id: nanoid(),
      size,
      difficulty,
      time: moment().diff(initTime, "seconds"),
      date: new Date().toISOString(),
    };

    if (storedRecords.length === 0) {
      storedRecords.push(newRecord);
    } else {
      for (let i = 0; i < storedRecords.length; i++) {
        if (storedRecords[i].time > newRecord.time) {
          storedRecords.splice(i, 0, newRecord);
          break;
        }
      }
    }

    localStorage.setItem("MINESWEEPER_RECORDS", JSON.stringify(storedRecords));
  },
};

export default recordsInterface;
