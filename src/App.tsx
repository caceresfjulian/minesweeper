import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type InitForm } from './App.types.js'
import Board from './components/Board'
import InitScreen from './components/InitScreen'
import MobileOverlay from './components/MobileOverlay'
import Records from './components/Records'
import { createGame } from './features/board/boardSlice.js'
import { type RootState } from './store.js'

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
    <main
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'var(--main-color)'
      }}
    >
      {game.length === 0 && !showRecords && (
        <InitScreen
          createBoard={handleCreateBoard}
          toggleRecords={toggleRecords}
        />
      )}
      {game.length !== 0 && <Board />}
      {showRecords && <Records toggleRecords={toggleRecords} />}
      <MobileOverlay />
    </main>
  )
}

export default App
