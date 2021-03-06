import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 0.625em;
  overflow: hidden;

  @media screen and (min-width: 960px) {
    height: 100vh;
    overflow-y: scroll;
    padding: 0em;
  }
`

export const Container = styled.main`
  height: 100vh;
  overflow: ${(props) => (props.hidden ? 'hidden' : 'auto')};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  @media screen and (min-width: 960px) {
    display: flex;
    flex-flow: row nowrap;
  }
`
