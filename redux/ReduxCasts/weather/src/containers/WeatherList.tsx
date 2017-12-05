import * as React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

interface Props {
  weather: any;
}

class WeatherList extends React.Component<Props, {}> {

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather = (cityData: any) => {
    const name = cityData.city.name;
    const temps = cityData.list.map((each: any) => each.main.temp);
    const pressures = cityData.list.map((each: any) => each.main.pressure);
    const humidities = cityData.list.map((each: any) => each.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <Map
            lat={lat}
            lon={lon}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `200px`, width: `250px`}} />}
            containerElement={<div style={{ height: `200px`, width: `250px`}} />}
            mapElement={<div style={{ height: `200px`, width: `250px`}} />}
          />
        </td>
        <td><Chart data={temps} color={'orange'} units={'K'}/></td>
        <td><Chart data={pressures} color={'green'} units={'hPa'}/></td>
        <td><Chart data={humidities} color={'black'} units={'%'}/></td>
      </tr>
    );
  };

}

const mapStateToProps = ({weather}: any) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);