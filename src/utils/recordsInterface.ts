import moment, { type Moment } from 'moment'
import { nanoid } from 'nanoid'

interface Record {
  id: string
  size: number
  difficulty: string
  time: number
  date: string
}

interface RecordsInterface {
  getRecords: () => Record[]
  setRecords: (data: { size: number, difficulty: string, initTime: Moment }) => void
}

const recordsInterface: RecordsInterface = {
  getRecords () {
    const records: Record[] = JSON.parse(
      localStorage.getItem('MINESWEEPER_RECORDS') ?? '[]'
    )
    return records
  },

  setRecords ({ size, difficulty, initTime }) {
    const storedRecords = this.getRecords()
    storedRecords.push({
      id: nanoid(),
      size,
      difficulty,
      time: moment().diff(initTime, 'seconds'),
      date: new Date().toISOString()
    })

    localStorage.setItem('MINESWEEPER_RECORDS', JSON.stringify(storedRecords))
  }
}

export default recordsInterface
