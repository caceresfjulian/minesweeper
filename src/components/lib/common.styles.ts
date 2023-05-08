import styled from "styled-components";
import { type Theme } from "../../theming/theme";

export const BaseButton = styled.button`
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.mainColor};
  font-family: "Silkscreen", cursive;
  padding: max(8px, 0.5vw);
  cursor: pointer;
  font-size: max(18px, 2.4vh);
`;
export const BaseSelect = styled.select`
  font-family: "Silkscreen", cursive;
  padding: 5px;
  cursor: pointer;
  font-size: max(14px, 2.2vh);
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.bgColor};
`;
export const BaseOverlay = styled.div`
  background-color: ${(props) => props.theme.transparencyColor};
  width: 100%;
  height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
`;
export const BaseModal = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 75%;
  max-width: 500px;
  height: 250px;
  padding: 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BaseInput = styled.input`
  font-family: "Silkscreen", cursive;
  padding: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.bgColor};
`;

export const BaseLabel = styled.label`
  color: ${(props) => props.theme.mainColor};
  font-size: max(18px, 2.4vh);
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.bgColor};
  stroke-width: 2px;
`;

interface ShownCheckboxProps {
  checked: boolean;
  theme: Theme;
}

export const ShownCheckbox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  background: ${(props: ShownCheckboxProps) =>
    props.checked ? props.theme.mainColor : props.theme.bgColor};

  border: 1px solid ${(props) => props.theme.mainColor};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const BaseH1 = styled.h1`
  color: ${(props) => props.theme.mainColor};
  font-size: min(9vw, 56px);
`;

export const BaseH2 = styled.h2`
  color: ${(props) => props.theme.mainColor};
  font-size: min(8vw, 52px);
`;

export const BaseH3 = styled.h3`
  color: ${(props) => props.theme.mainColor};
  font-size: min(6vw, 42px);
`;

export const BaseH4 = styled.h4`
  color: ${(props) => props.theme.mainColor};
  font-size: min(5vw, 36px);
`;

export const BaseH5 = styled.h5`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH6 = styled.h6`
  color: ${(props) => props.theme.mainColor};
`;
