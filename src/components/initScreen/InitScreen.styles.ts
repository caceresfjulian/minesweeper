import styled from "styled-components";
import { BaseH1, BaseInput } from "../common.styles";

export const Title = styled(BaseH1)`
  textoverflow: ellipsis;
  textalign: center;
  whitespace: nowrap;
  overflow: hidden;
  font-size: min(9vw, 56px);
`;

export const Container = styled.div`
  max-width: 1080px;
  margin-top: 24px;
`;

export const List = styled.ul`
  padding: 0 15px 0 50px;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.mainColor};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;
export const ButtonsBox = styled.div`
  display: flex;
  margin-top: 35px;
  gap: 15px;
`;

export const TextInput = styled(BaseInput)`
  max-width: 120px;
  margin-top: 15px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.mainColor};
`;
