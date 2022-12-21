import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

import Home from "../../pages/Home/Home";
import Crew from "../../pages/Crew/Crew";
import Destination from "../../pages/Destination/Destination";
import Technology from "../../pages/Technology/Technology";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
