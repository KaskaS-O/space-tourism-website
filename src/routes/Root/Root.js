import { Outlet, useLoaderData } from "react-router-dom";

import { getData } from "../../utils/getData";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledApp } from "./style";

export async function loader() {
  const data = await getData();

  return data;
}

const Root = () => {
  const data = useLoaderData();

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header data={data} />
        <Outlet context={data} />
        <Footer />
      </StyledApp>
    </>
  );
};

export default Root;
