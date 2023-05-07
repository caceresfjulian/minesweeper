import styled from "styled-components";
import { BaseButton, BaseLabel, BaseOverlay } from "../lib/common.styles";

export const Overlay = styled(BaseOverlay)`
  display: flex;
`;
export const GameOverText = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;
export const GameOverButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
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
