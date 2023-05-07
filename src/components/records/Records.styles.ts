import styled from "styled-components";
import { BaseButton } from "../lib/common.styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Table = styled.table`
  margin-top: 15px;
  border: 1px solid ${(props) => props.theme.mainColor};
`;

export const Th = styled.th`
  border: 1px solid ${(props) => props.theme.mainColor};
  padding: 5px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const Td = styled.td`
  border: 1px solid ${(props) => props.theme.mainColor};
  padding: 5px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const Button = styled(BaseButton)`
  margin-top: 15px;
`;
