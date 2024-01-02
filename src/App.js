import "./App.css";

export default function App() {
  let Weather = {
    description: "Partly Cloudly",
    temperature: 40,
    wind: 2,
    humidity: 45,
  };
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-8">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="Enter City..."
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="col-2">
                <input type="submit" className="btn btn-light" value="🔍" />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-light"
                  id="locationButton"
                  value="📌"
                />
              </div>
            </div>
          </form>
          <h1 id="currentCity">New York</h1>
          <h3 id="currentDate">Monday, December 18, 3:48 PM</h3>
          <h4>{Weather.description}</h4>
          <div className="row currentWeather">
            <div className="col-6 currentWeatherImage">
              <img
                src="https://openweathermap.org/img/wn/01d.png"
                className="forecastImage"
                alt="Clear "
                id="weatherIcon"
              />
            </div>
            <div className="col-6 currentWeatherTemperature">
              <span id="currentTemperature">{Weather.temperature}</span>
              <a href="." id="celsiusLnk" className="active">
                °C
              </a>
            </div>
          </div>
          <div className="row currentWeatherParametrs">
            <div className="col-6">
              Wind: <span id="currentWind">{Weather.wind}</span> km/h
            </div>
            <div className="col-6">
              Humidity: <span id="currentHumidity">{Weather.humidity}</span>%
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <div>
        <a
          id="githubLink"
          href="https://github.com/MilaBorodkina/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Sarah Pontius
      </div>
    </div>
  );
}
