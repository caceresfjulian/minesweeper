import React from 'react'
import moment from 'moment'
import formatTimekeeper from '../../utils/formatTimekeeper'
import recordsInterface from '../../utils/recordsInterface'
import { Button, Container, Table, Td, Th } from './Records.styles'

interface RecordsProps {
  toggleRecords: () => void
}

function Records ({ toggleRecords }: RecordsProps): JSX.Element {
  const recordList = recordsInterface.getRecords()

  return (
    <Container>
      <h2>Records</h2>
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Difficulty</Th>
            <Th>Board size</Th>
            <Th>Duration</Th>
          </tr>
        </thead>
        {recordList.length > 0 && (
          <tbody>
            {recordList.map(({ date, id, size, time, difficulty }) => (
              <tr key={id}>
                <Td>{moment(date).format('YYYY-MM-DD')}</Td>
                <Td>{moment(date).format('HH:mm:ss')}</Td>
                <Td>{difficulty}</Td>
                <Td>{`${size}x${size}`}</Td>
                <Td>{formatTimekeeper(time)}</Td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      <Button
        type="button"
        onClick={toggleRecords}
      >
        Main screen
      </Button>
    </Container>
  )
}

export default Records
