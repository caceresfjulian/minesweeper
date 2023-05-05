import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type InitForm } from './App.types.js'
import Board from './components/board/Board.js'
import InitScreen from './components/initScreen/InitScreen.js'
import MobileOverlay from './components/mobileOverlay/MobileOverlay.js'
import Records from './components/records/Records.js'
import { createGame } from './features/board/boardSlice.js'
import { type RootState } from './store.js'
import { Button, Main } from './App.styles.js'
import { toggleTheme } from './features/theme/themeSlice.js'

function App (): JSX.Element {
  const [showRecords, setShowRecords] = useState<boolean>(false)
  const game = useSelector((state: RootState) => state.board.game)
  const dispatch = useDispatch()

  const handleCreateBoard = (e: InitForm): void => {
    e.preventDefault()
    const {
      target: {
        elements: {
          size: { value }
        }
      }
    } = e

    dispatch(createGame(Number(value)))
  }

  const toggleRecords = (): void => {
    setShowRecords((r) => !r)
  }

  return (
    <Main>
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
        Toggle theme
      </Button>
      {game.length === 0 && !showRecords && (
        <InitScreen
          createBoard={handleCreateBoard}
          toggleRecords={toggleRecords}
        />
      )}
      {game.length !== 0 && <Board />}
      {showRecords && <Records toggleRecords={toggleRecords} />}
      <MobileOverlay />
    </Main>
  )
}

export default App
