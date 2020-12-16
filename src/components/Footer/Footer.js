import styled from 'styled-components'

const Footer = styled.div `
  position: relative;
  bottom: ${props => props.theme.heights.footer};
  width: 100%;
  height: ${props => props.theme.heights.footer};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: ${props => props.theme.primaryColors.primaryLighter};
  z-index: 3;
  color: ${props => props.theme.primaryColors.primaryDarker};
  font-size: 16px;
`

export default Footer
