import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { type Board, type Coordinates } from '../../utils/Types'
import createBoard from '../../utils/createBoard'
import countCoincidences from '../../utils/matrix/countCoincidences'
import createMatrix from '../../utils/matrix/createMatrix'
import recordsInterface from '../../utils/recordsInterface'

export interface BoardState {
  game: Board
  board: Board
  mines: number
  flags: number
  isWinner: boolean
  isLoser: boolean
  didLose: boolean
  initTime?: string
}

const initialState: BoardState = {
  game: [],
  board: [],
  mines: 0,
  flags: 0,
  isWinner: false,
  isLoser: false,
  didLose: false
}

interface CreateGamePayload {
  size: number
  difficulty: string
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createGame: (state, action: PayloadAction<CreateGamePayload>) => {
      state.game = createMatrix(action.payload.size)

      if (action.payload.difficulty === 'easy') {
        state.mines = Math.floor(action.payload.size * 1.5)
      }

      if (action.payload.difficulty === 'medium') {
        state.mines = Math.floor(action.payload.size * 2)
      }

      if (action.payload.difficulty === 'hard') {
        state.mines = Math.floor(action.payload.size * 2)
      }

      state.board = createBoard(action.payload.size, state.mines)
      state.initTime = moment().toISOString()
    },
    revealTile: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.game[x][y] = 1
    },
    updateGame: (state, action: PayloadAction<Board>) => {
      state.game = action.payload
      if (
        state.game.length ** 2 - state.mines ===
        countCoincidences(state.game, 1)
      ) {
        state.isWinner = true
        if (!state.didLose) {
          recordsInterface.setRecords({
            size: state.game.length,
            initTime: moment(state.initTime)
          })
        }
      }
    },
    loseGame: (state) => {
      state.isWinner = false
      state.isLoser = true
      state.didLose = true
    },
    addFlag: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.flags += 1
      state.game[x][y] = 2
    },
    removeFlag: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.flags -= 1
      state.game[x][y] = 0
    },
    resetGame: (state) => {
      return initialState
    },
    keepPlaying: (state) => {
      state.isLoser = false
    }
  }
})

export const {
  addFlag,
  createGame,
  keepPlaying,
  loseGame,
  updateGame,
  removeFlag,
  resetGame,
  revealTile
} = boardSlice.actions

export default boardSlice.reducer
