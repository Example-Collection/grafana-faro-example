import React, { useState } from "react";
import { useDispatch } from "react-redux";
import WeatherInfo from "../components/WeatherInfo";
import useRootState from "../global/useRootState";
import styled from "styled-components";

const WeatherInfoContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const is_loading = useRootState((state) => state.weather.is_loading);
  const data = useRootState((state) => state.weather.data);
  const [isCallingApi, setIsCallingApi] = useState<boolean>(false);

  const getWeatherSagaDispatch = () =>
    dispatch({ type: "weather/getWeatherSaga" });
  const getWeather = () => {
    setIsCallingApi(!isCallingApi);
    getWeatherSagaDispatch();
  };

  return isCallingApi ? (
    <WeatherInfo data={data} is_loading={is_loading} />
  ) : (
    <Button onClick={getWeather}>Click to know the weather!</Button>
  );
};

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a7f37;
  color: #f0f6fc;
  padding: 1rem;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

export default WeatherInfoContainer;
