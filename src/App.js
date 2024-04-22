import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import RecentSearchesList from "./components/RecentSearchesList";
import Error from "./components/Error";
import { fetchWeatherData } from "./api";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import ModalRecentSearch from "./components/ModalRecentSearch";

const AppDiv = styled.div`
  background: #f4f4f4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const WeatherContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  flex-grow: 1;
`;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const data = await fetchWeatherData(city);
          setWeatherData(data);
          console.log(data);
        }
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <AppDiv>
      <Header />
      <Navbar onModalButtonClick={toggleModal} />
      <Search onSubmit={handleSearch} />
      <WeatherContainer>
        {weatherData && <Weather weatherData={weatherData} />}
        {error && <Error message={error} />}
      </WeatherContainer>
      <RecentSearchesList />
      <Footer />
      <ModalRecentSearch isOpen={isModalOpen} onClose={toggleModal} />
    </AppDiv>
  );
}

export default App;
