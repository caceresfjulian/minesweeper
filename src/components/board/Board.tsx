import React from 'react'
import revealNeighbors from '../../utils/revealNeighbors'
import TimeKeeper from '../timeKeeper/TimeKeeper'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../../store'
import {
  revealTile,
  updateGame,
  loseGame,
  addFlag,
  removeFlag,
  resetGame,
  keepPlaying
} from '../../features/board/boardSlice'
import { BoardContainer, Button, Cell, GameOverButtonsBox, GameOverText, Overlay, Row } from './Board.styles'
import { BaseButton, BaseModal } from '../common.styles'

export default function Board (): JSX.Element {
  const { game, board, mines, flags, isWinner, didLose, isLoser } = useSelector(
    (state: RootState) => state.board
  )
  const dispatch = useDispatch()

  const handleClick = (i: number, j: number): void => {
    if (isWinner) {
      return
    }

    if (board[i][j] === 'x' && game[i][j] !== 2) {
      dispatch(loseGame())
      return
    }

    if (game[i][j] === 1 || game[i][j] === 2) {
      return
    }

    dispatch(revealTile([i, j]))
    dispatch(updateGame(revealNeighbors([i, j], board, game)))
  }

  const handleRightClick = (i: number, j: number): void => {
    if (isWinner || game[i][j] === 1) {
      return
    }

    if (game[i][j] === 2) {
      dispatch(removeFlag([i, j]))
      return
    }

    if (game[i][j] === 0) {
      dispatch(addFlag([i, j]))
    }
  }

  return (
    <>
      {isWinner && (
        <>
          <h2>Congratulations!</h2>
        </>
      )}
      {!isWinner && (
        <>
          <h4>{`Unmarked mines: ${mines - flags}`}</h4>
        </>
      )}
      <TimeKeeper stop={isWinner || didLose} />
      {isLoser && didLose && (
        <Overlay>
          <BaseModal>
            <h2>Game over</h2>
            <GameOverText>
              If you keep playing, your game time won&apos;t be registered
            </GameOverText>
            <GameOverButtonsBox>
              <BaseButton onClick={() => dispatch(keepPlaying())}>
                Keep playing
              </BaseButton>
              <BaseButton onClick={() => dispatch(resetGame())}>Main Screen</BaseButton>
            </GameOverButtonsBox>
          </BaseModal>
        </Overlay>
      )}
      {
        <BoardContainer>
          {board.map((row, i) => (
            <Row key={i}>
              {row.map((value, j) => (
                <Cell
                  key={j}
                  isWinner={isWinner}
                  revealed={String(game[i][j])}
                  onClick={() => { handleClick(i, j) }}
                  onContextMenu={(e) => { e.preventDefault() }}
                  onAuxClick={() => { handleRightClick(i, j) }}
                >
                  {game[i][j] === 1 ? value : '\u00A0'}
                </Cell>
              ))}
            </Row>
          ))}
        </BoardContainer>
      }
      <Button onClick={() => dispatch(resetGame())}>
        Main Screen
      </Button>
    </>
  )
}
