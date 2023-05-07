import styled from "styled-components";
import { BaseButton } from "../lib/common.styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Table = styled.table`
  margin: 15px;
  border: 1px solid ${(props) => props.theme.mainColor};
  font-size: max(14px, 2.2vh);

  @media screen and (max-width: 767px) {
    margin: 15px 5px;
  }
`;

export const THead = styled.thead`
  display: block;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};

  @media screen and (max-width: 767px) {
    padding: 4px;
    font-size: 14px;
  }
`;

export const TBody = styled.tbody`
  display: block;
  max-height: 40vh;
  overflow-y: scroll;
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

export const TdDesktopOnly = styled(Td)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ThDesktopOnly = styled(Th)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
