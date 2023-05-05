import styled from 'styled-components'
import { BaseOverlay } from '../common.styles'

export const Overlay = styled(BaseOverlay)`
  display: none;
  
  @media screen and (max-width: 767px) {
    display: flex;
  }
`
