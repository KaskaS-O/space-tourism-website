import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: "Barlow", sans-serif;
  color: var(--light-grey)
}

body {
  width: 100%;
  min-height: 100vh;
}

main {
  min-height: 100vh;
  padding: calc(var(--header-height) + 2 * var(--outer-padding)) var(--outer-padding) var(--outer-padding);
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
