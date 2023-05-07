import React from "react";
import { type InitForm } from "../../App.types";
import {
  ButtonsBox,
  Container,
  Form,
  List,
  Title,
  ListItem,
  Label,
  DesktopOnlyOption,
  FormContainer,
} from "./InitScreen.styles";
import { BaseButton, BaseH3, BaseSelect } from "../lib/common.styles";

interface InitScreenProps {
  createBoard: (e: InitForm) => void;
  toggleRecords: () => void;
  formError: boolean;
}

export default function InitScreen({
  createBoard,
  toggleRecords,
  formError,
}: InitScreenProps): JSX.Element {
  return (
    <>
      <Title>Minesweeper</Title>
      <BaseH3>By Julian Caceres</BaseH3>
      <Container>
        <List>
          <ListItem>
            Left-click on a square to reveal what is underneath it.
          </ListItem>
          <ListItem>Right-click on a square to flag it as a mine. </ListItem>
          <ListItem>
            Use logic and deduction to uncover all the safe squares on the board
            without detonating any of the mines.
          </ListItem>
        </List>
        <Form onSubmit={createBoard}>
          <FormContainer>
            <Label>
              Size:&nbsp;
              <BaseSelect name="size">
                <option value="5">5 x 5</option>
                <option value="8">8 x 8</option>
                <DesktopOnlyOption value="16">16 x 16</DesktopOnlyOption>
              </BaseSelect>
            </Label>
            <Label>
              Difficulty:&nbsp;
              <BaseSelect name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </BaseSelect>
            </Label>
            <ButtonsBox>
              <BaseButton type="submit">Start game</BaseButton>
              <BaseButton type="button" onClick={toggleRecords}>
                Highest records
              </BaseButton>
            </ButtonsBox>
          </FormContainer>
        </Form>
      </Container>
    </>
  );
}
