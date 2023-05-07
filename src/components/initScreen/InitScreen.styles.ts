import styled from "styled-components";
import { BaseH1, BaseH3, BaseInput, BaseLabel } from "../lib/common.styles";

export const Title = styled(BaseH1)`
  textoverflow: ellipsis;
  textalign: center;
  whitespace: nowrap;
  overflow: hidden;
`;

export const Subtitle = styled(BaseH3)``;

export const Container = styled.div`
  max-width: 1080px;
  margin-top: min(32px, 5vh);
`;

export const List = styled.ul`
  padding: 0 15px 0 50px;
`;

export const ListItem = styled.li`
  color: ${(props) => props.theme.mainColor};
  font-size: max(14px, 2.2vh);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: min(40px, 2.5vh);
`;
export const ButtonsBox = styled.div`
  display: flex;
  margin-top: min(40px, 2vh);
  gap: 15px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TextInput = styled(BaseInput)`
  max-width: 120px;
  margin-top: 15px;
`;

export const Label = styled(BaseLabel)`
  color: ${(props) => props.theme.mainColor};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(14px, 2.2vh);
`;

export const DesktopOnlyOption = styled.option`
  display: inline;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
