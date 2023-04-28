import React from 'react'
import moment from 'moment'
import formatTimekeeper from '../utils/formatTimekeeper'
import recordsInterface from '../utils/recordsInterface'

interface RecordsProps {
  toggleRecords: () => void
}

function Records ({ toggleRecords }: RecordsProps): JSX.Element {
  const recordList = recordsInterface.getRecords()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h2>Records</h2>
      <table style={{ marginTop: '15px' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Board size</th>
            <th>Time</th>
          </tr>
        </thead>
        {recordList.length > 0 && (
          <tbody>
            {recordList.map(({ date, id, size, time }) => (
              <tr key={id}>
                <td>{moment(date).format('YYYY-MM-DD')}</td>
                <td>{moment(date).format('HH:mm:ss')}</td>
                <td>{`${size}x${size}`}</td>
                <td>{formatTimekeeper(time)}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <button
        type="button"
        onClick={toggleRecords}
        style={{ marginTop: '15px' }}
      >
        Main screen
      </button>
    </div>
  )
}

export default Records
