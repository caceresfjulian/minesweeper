import React from "react";
import moment from "moment";
import formatTimekeeper from "../../utils/formatTimekeeper";
import recordsInterface from "../../utils/recordsInterface";
import {
  Button,
  Container,
  TBody,
  THead,
  Table,
  Td,
  TdDesktopOnly,
  Th,
  ThDesktopOnly,
} from "./Records.styles";
import { BaseH2 } from "../lib/common.styles";

interface RecordsProps {
  toggleRecords: () => void;
}

function Records({ toggleRecords }: RecordsProps): JSX.Element {
  const recordList = recordsInterface.getRecords();

  return (
    <Container>
      <BaseH2>Records</BaseH2>
      <Table>
        <THead>
          <tr>
            <Th style={{ width: 180 }}>Date</Th>
            <ThDesktopOnly style={{ width: 150 }}>Time</ThDesktopOnly>
            <Th style={{ width: 220 }}>Level</Th>
            <Th style={{ width: 150 }}>Board size</Th>
            <Th style={{ width: 200 }}>Duration</Th>
          </tr>
        </THead>
        {recordList.length > 0 && (
          <TBody>
            {recordList.map(({ date, id, size, time, difficulty }) => (
              <tr key={id}>
                <Td style={{ width: 180 }}>
                  {moment(date).format("YYYY-MM-DD")}
                </Td>
                <TdDesktopOnly style={{ width: 150 }}>
                  {moment(date).format("HH:mm:ss")}
                </TdDesktopOnly>
                <Td style={{ width: 220 }}>{difficulty}</Td>
                <Td style={{ width: 150 }}>{`${size}x${size}`}</Td>
                <Td style={{ width: 200 }}>{formatTimekeeper(time)}</Td>
              </tr>
            ))}
          </TBody>
        )}
      </Table>
      <Button type="button" onClick={toggleRecords}>
        Main screen
      </Button>
    </Container>
  );
}

export default Records;
