import  styled from "styled-components";
import px2vw from "../hooks/px2vw";

export const Global = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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