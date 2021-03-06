import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
  display: ${(props) => (props.hidden ? 'flex' : 'none')};
  flex-flow: column nowrap;
  height: 100vh;
  width: ${(props) => (props.hidden ? '100%' : '0')};
  position: fixed;
  top: 50px;
  left: 0;
  overflow-y: auto;

  @media screen and (min-width: 960px) {
    display: flex;
    position: initial;
    width: 100%;
    margin: 30px 0em;
  }
`

export const InternalLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 20px;
  text-align: center;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 960px) {
    text-align: initial;
    margin: initial;
  }
`
