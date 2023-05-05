export interface Theme {
  mainFont: string
  mainColor: string
  bgColor: string
  highlightColor: string
  transparencyColor: string
}

export const baseTheme: Theme = {
  mainFont: '"Silkscreen", cursive;',
  mainColor: 'rgb(0, 236, 0)',
  bgColor: '#000',
  highlightColor: 'rgb(255, 247, 0)',
  transparencyColor: 'rgba(0, 0, 0, 0.4)'
}

export const lightTheme: Theme = {
  mainFont: '"Silkscreen", cursive;',
  mainColor: '#000',
  bgColor: '#FFF',
  highlightColor: 'pink',
  transparencyColor: 'rgba(0, 0, 0, 0.4)'
}
