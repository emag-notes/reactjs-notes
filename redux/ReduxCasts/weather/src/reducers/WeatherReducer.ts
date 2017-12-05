import { FETCH_WEATHER, FetchWeatherAction } from '../actions';

export default (state = [], action: FetchWeatherAction) => {

  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];

    default:
      return state;
  }

};
