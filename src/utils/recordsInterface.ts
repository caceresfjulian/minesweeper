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
    let storedRecords = this.getRecords();
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
      if (storedRecords[0].time > newRecord.time) {
        storedRecords.unshift(newRecord);
      } else if (
        storedRecords[storedRecords.length - 1].time < newRecord.time
      ) {
        storedRecords.push(newRecord);
      } else {
        for (let i = 0; i < storedRecords.length; i++) {
          if (storedRecords[i].time > newRecord.time) {
            storedRecords.splice(i, 0, newRecord);
            break;
          } else if (i === storedRecords.length - 1) {
            storedRecords.push(newRecord);
          }
        }
      }
    }

    if (storedRecords.length > 10) {
      storedRecords = storedRecords.slice(0, 10);
    }

    localStorage.setItem("MINESWEEPER_RECORDS", JSON.stringify(storedRecords));
  },
};

export default recordsInterface;
