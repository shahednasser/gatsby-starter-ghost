import styled, { css } from "styled-components"
import SearchResult from "./search-result"

const Popover = css`
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0px 1px 3px 0 #313131;
  padding: 1em;
  border-radius: 2px;
  background: ${({ theme }) => theme.searchResult.background};
  color: ${({ theme }) => theme.searchResult.foreground};

  ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 0;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding: 0;
    }

    li.ais-Hits-item {
        margin-bottom: 1em;
        position: relative;
        padding: 0.5em 1.5em 0.5em 1.3em;

      a {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
      }

        h4 {
          margin: 0 0 0.2em 0;
          color: ${({ theme }) => theme.searchResult.foreground};
        }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`
