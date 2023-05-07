import React from "react";
import styled from "styled-components";
import {
  BaseButton,
  BaseH3,
  BaseModal,
  BaseOverlay,
} from "../lib/common.styles";

const Overlay = styled(BaseOverlay)`
  display: flex;
`;
const GameOverText = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;
const GameOverButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: max(8px, 3vh);
`;

const GameButton = styled(BaseButton)`
  max-width: 50%;
`;

const GameModal = styled(BaseModal)`
  height: 55vh;
  max-height: 350px;
`;

interface GameOverModalProps {
  keepPlaying: () => void;
  resetGame: () => void;
}

const GameOverModal = ({
  keepPlaying,
  resetGame,
}: GameOverModalProps): JSX.Element => {
  return (
    <Overlay>
      <GameModal>
        <BaseH3>Game over</BaseH3>
        <GameOverText>
          If you keep playing, your game time won&apos;t be registered
        </GameOverText>
        <GameOverButtonsBox>
          <GameButton onClick={keepPlaying}>Keep playing</GameButton>
          <GameButton onClick={resetGame}>Main Screen</GameButton>
        </GameOverButtonsBox>
      </GameModal>
    </Overlay>
  );
};

export default GameOverModal;
