import styled from 'styled-components'
import { BaseButton } from './components/common.styles'

export const Main = styled.main`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.mainFont};
  font-size: 24px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Button = styled(BaseButton)`
  position: absolute;
  top: 15px;
  right: 15px;
`
