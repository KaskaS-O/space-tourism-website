import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

import Home from "../../pages/Home/Home";
import Crew from "../../pages/Crew/Crew";
import Destination from "../../pages/Destination/Destination";
import Technology from "../../pages/Technology/Technology";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import React from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
        setIsLoaded(true);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="visually-hidden">Space travel agency</h1>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/crew" element={<Crew data={data} />}></Route>
          <Route
            path="/destination"
            element={<Destination data={data} />}
          ></Route>
          <Route
            path="/technology"
            element={<Technology data={data} />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
