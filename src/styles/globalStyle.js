import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 108px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
body{
    font-family: 'Noto Serif KR', serif;
}
a{
    text-decoration: none;
}
`;
