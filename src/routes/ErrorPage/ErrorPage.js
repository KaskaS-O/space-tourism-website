// const ErrorPage = () => {
//   return (
//     <main>
//       <p>The website doesn't exist</p>
//     </main>
//   );
// };

// export default ErrorPage;

import { useRouteError } from "react-router-dom";
import { StyledPageTitle, StyledTxt } from "../../styles/common";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledContent } from "../Home/style";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <GlobalStyles />
      <StyledContent id="error-page">
        <StyledPageTitle>Oops!</StyledPageTitle>
        <StyledTxt>Sorry, an unexpected error has occurred.</StyledTxt>
        <StyledTxt>
          <i>{error.statusText || error.message}</i>
        </StyledTxt>
      </StyledContent>
    </>
  );
}
