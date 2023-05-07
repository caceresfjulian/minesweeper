import styled from "styled-components";
import { BaseButton, BaseLabel } from "../lib/common.styles";

export const Header = styled.div`
  @media screen and (max-width: 767px) {
    margin: 0 15px max(12px, 2vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid ${(props) => props.theme.mainColor};
`;

export const Row = styled.div`
  display: flex;
`;

interface CellProps {
  isWinner: boolean;
  revealed: string;
}

export const Cell = styled.div<CellProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 30px;
  height: 30px;
  flex: 1;
  cursor: ${({ isWinner, revealed }) =>
    isWinner ? "not-allowed" : revealed !== "0" ? "default" : "pointer"};
  color: ${({ revealed, theme }) =>
    revealed === "1" ? theme.mainColor : theme.highlightColor};
  background-color: ${({ revealed, theme }) =>
    revealed === "2" ? theme.highlightColor : "unset"};
`;

export const Button = styled(BaseButton)`
  margin-top: 15px;
`;

export const MobileLabel = styled(BaseLabel)`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;
