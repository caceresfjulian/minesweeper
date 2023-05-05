import React from 'react'
import { type InitForm } from '../../App.types'
import { ButtonsBox, Container, Form, List, Title } from './InitScreen.styles'
import { BaseButton, BaseSelect } from '../common.styles'

interface InitScreenProps {
  createBoard: (e: InitForm) => void
  toggleRecords: () => void
}

export default function InitScreen ({
  createBoard,
  toggleRecords
}: InitScreenProps): JSX.Element {
  return (
    <>
      <Title>Minesweeper</Title>
      <h6>By Julian Caceres</h6>
      <Container>
        <List>
          <li>Left-click on a square to reveal what is underneath it.</li>
          <li>Right-click on a square to flag it as a mine. </li>
          <li>
            Use logic and deduction to uncover all the safe squares on the board
            without detonating any of the mines.
          </li>
        </List>
        <Form onSubmit={createBoard}>
          <BaseSelect name="size">
            <option value="16">16 x 16</option>
            <option value="8">8 x 8</option>
            <option value="5">5 x 5</option>
          </BaseSelect>
          <ButtonsBox>
            <BaseButton type="submit">Start game</BaseButton>
            <BaseButton type="button" onClick={toggleRecords}>
              Highest records
            </BaseButton>
          </ButtonsBox>
        </Form>
      </Container>
    </>
  )
}
