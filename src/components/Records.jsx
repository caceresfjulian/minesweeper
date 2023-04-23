import PropTypes from "prop-types";
import recordsInterface from "../utils/recordsInterface";
import moment from "moment";
import formatTimekeeper from "../utils/formatTimekeeper";

function Records({ toggleRecords }) {
  const recordList = recordsInterface.getRecords();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Records</h2>
      {recordList.length && (
        <table style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Board size</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recordList.map(({ date, id, size, time }) => (
              <tr key={id}>
                <td>{moment(date).format("YYYY-MM-DD")}</td>
                <td>{moment(date).format("HH:mm:ss")}</td>
                <td>{`${size}x${size}`}</td>
                <td>{formatTimekeeper(time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        type="button"
        onClick={toggleRecords}
        style={{ marginTop: "15px" }}
      >
        Main screen
      </button>
    </div>
  );
}

Records.propTypes = {
  toggleRecords: PropTypes.func.isRequired,
};

export default Records;
