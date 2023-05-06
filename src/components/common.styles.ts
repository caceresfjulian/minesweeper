import styled from "styled-components";

export const BaseButton = styled.button`
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.mainColor};
  font-family: "Silkscreen", cursive;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;
`;
export const BaseSelect = styled.select`
  font-family: "Silkscreen", cursive;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;
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

export const BaseH1 = styled.h1`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH2 = styled.h2`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH3 = styled.h3`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH4 = styled.h4`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH5 = styled.h5`
  color: ${(props) => props.theme.mainColor};
`;

export const BaseH6 = styled.h6`
  color: ${(props) => props.theme.mainColor};
`;
