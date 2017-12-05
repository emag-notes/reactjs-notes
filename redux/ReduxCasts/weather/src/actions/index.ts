import axios from 'axios';

const API_KEY = '3f676dad2792e8c6daab0521506dad3e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export type FETCH_WEATHER = typeof FETCH_WEATHER;

export interface FetchWeatherAction {
  type: FETCH_WEATHER;
  payload: any;
}

export const fetchWeather = (city: string): FetchWeatherAction => {
  const url = `${ROOT_URL}&q=${city},jp`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

};