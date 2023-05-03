import { createGlobalStyle } from "styled-components"; // npm에서 설치한 것
import reset from "styled-reset"; //npm에서 설치한 것

export const GlobalStyles = createGlobalStyle`

    ${reset} // reset
    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
`