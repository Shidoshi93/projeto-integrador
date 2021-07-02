import  styled from "styled-components"; 
import px2vw from "../hooks/px2vw";
import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  // :root {
  //     font-size: ${px2vw(24)};

  //     @media (min-width: 768px) {
  //       font-size: ${px2vw(16)};
  //     }

  //     @media (min-width: 1024px) {
  //       font-size: ${px2vw(14)};
  //     }
  //   }
`
export const ContentContainer = styled.div`
    min-height: 75vh;
`