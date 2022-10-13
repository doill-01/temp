import { useEffect } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

//1.앱이 실행되자 마자 날씨가 보인다.
//2.날씨정보에는 도시,섭씨,화씨,상태정보가 들어감
//3.5개의 버튼이 있다. (1개는 현재위치 4개는 다른도시)
//4. 도시버튼을 클릭할때마다 도시별 날씨가 보인다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 들고 오는 동안 로딩스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e69c799cb623e5600acee051f2ff08ef&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherBycity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e69c799cb623e5600acee051f2ff08ef&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherBycity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
		<div className="container">
        <ClipLoader
          color="#f88c6b"
          loading={loading}
          size={150}
        /></div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
