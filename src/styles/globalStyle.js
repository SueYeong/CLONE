import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 108px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
body{
  font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
}
a{
  text-decoration: none;
}
`;
