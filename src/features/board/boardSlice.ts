import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { Board, Coordinates } from "../../utils/Types";
import createBoard from "../../utils/createBoard";
import countCoincidences from "../../utils/matrix/countCoincidences";
import createMatrix from "../../utils/matrix/createMatrix";
import recordsInterface from "../../utils/recordsInterface";

export interface BoardState {
  game: Board;
  board: Board;
  mines: number;
  flags: number;
  isWinner: Boolean;
  isLoser: Boolean;
  didLose: Boolean;
  initTime?: string;
}

const initialState: BoardState = {
  game: [],
  board: [],
  mines: 0,
  flags: 0,
  isWinner: false,
  isLoser: false,
  didLose: false,
};

export const boardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createGame: (state, action: PayloadAction<number>) => {
      state.game = createMatrix(action.payload);
      if (action.payload === 16) {
        state.mines = 40;
      }

      if (action.payload === 8) {
        state.mines = 20;
      }

      if (action.payload === 5) {
        state.mines = 10;
      }

      state.board = createBoard(action.payload, state.mines);
      state.initTime = moment().toISOString();
    },
    revealTile: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.game[x][y] = 1;
    },
    updateGame: (state, action: PayloadAction<Board>) => {
      state.game = action.payload;
      if (
        state.game.length ** 2 - state.mines ===
        countCoincidences(state.game, 1)
      ) {
        state.isWinner = true;
        if (!state.didLose) {
          recordsInterface.setRecords({
            size: state.game.length,
            initTime: moment(state.initTime),
          });
        }
      }
    },
    loseGame: (state) => {
      state.isWinner = false;
      state.isLoser = true;
      state.didLose = true;
    },
    addFlag: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.flags += 1;
      state.game[x][y] = 2;
    },
    removeFlag: (state, { payload: [x, y] }: PayloadAction<Coordinates>) => {
      state.flags -= 1;
      state.game[x][y] = 0;
    },
    resetGame: (state) => {
      return initialState;
    },
    keepPlaying: (state) => {
      state.isLoser = false;
    },
  },
});

export const {
  addFlag,
  createGame,
  keepPlaying,
  loseGame,
  updateGame,
  removeFlag,
  resetGame,
  revealTile,
} = boardSlice.actions;

export default boardSlice.reducer;
