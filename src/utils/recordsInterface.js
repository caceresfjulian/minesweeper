import moment from "moment";
import { nanoid } from "nanoid";

const recordsInterface = {
  getRecords() {
    const records =
      JSON.parse(localStorage.getItem("MINESWEEPER_RECORDS")) ?? [];
    return records.map((record) => ({
      ...record,
      date: new Date(record.date),
      id: nanoid(),
    }));
  },

  setRecords({ size, initTime }) {
    const storedRecords = this.getRecords();
    storedRecords.push({
      size: size,
      time: moment().diff(initTime, "seconds"),
      date: new Date().toISOString(),
    });

    localStorage.setItem("MINESWEEPER_RECORDS", JSON.stringify(storedRecords));
  },
};

export default recordsInterface;
