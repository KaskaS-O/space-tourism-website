import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

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
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${devices.tabletS} {
    padding: 13.5vh var(--outer-padding-tablet-sides) var(--outer-padding);
  }


  @media ${devices.laptopS} {
    padding: 23.5vh var(--outer-padding-desktop-sides) var(--outer-padding)
  }
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}

article {
  padding-bottom: 50px;
  max-width: 1600px;


}

button {
  cursor: pointer
}

.number {
  padding-right: 18px;
  font-weight: 700;

  &--mainNav {
    padding-right: 11px;
  }
}

.container {

  @media ${devices.tabletS} {
     display: flex;
    flex-grow: 2;
    height: 84px;
    width: fit-content;
  }

  .widthSetter {
    width: 20%;
    flex-grow: 1;
  }
 
}

#error-page {
    grid-template-columns: 1fr;
    grid-template-rows:  1fr auto auto;
    padding: 40vh 10vw;
    
    @media ${devices.tabletS} {
      padding: 40vh 30vw;

    }
    h1 {
      justify-self: center;
      padding: 0 0 20px 0;
      text-align: center;
    }
  }

`;

export default GlobalStyles;
