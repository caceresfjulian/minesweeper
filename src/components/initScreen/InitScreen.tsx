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
} from "./InitScreen.styles";
import { BaseButton, BaseH2, BaseSelect } from "../common.styles";

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
      <BaseH2>By Julian Caceres</BaseH2>
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
          <Label>
            Size:&nbsp;
            <BaseSelect name="size">
              <option value="16">16 x 16</option>
              <option value="8">8 x 8</option>
              <option value="5">5 x 5</option>
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
        </Form>
      </Container>
    </>
  );
}
