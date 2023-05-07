import React from "react";
import { Overlay } from "./MobileOverlay.styles";
import { BaseModal } from "../lib/common.styles";

function MobileOverlay(): JSX.Element {
  return (
    <Overlay>
      <BaseModal>
        <h3>This game is not playable on mobile devices :(</h3>
      </BaseModal>
    </Overlay>
  );
}

export default MobileOverlay;
