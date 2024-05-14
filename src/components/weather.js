const api = {
    key: fa38be172faef1c597e886be891907f4
    base: "https://api.openweathermap.org/data/2.5/",
};

const date = {d} => {
    let months = {
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",       
        "Oct",
        "Nov",
        "Dec",

};
let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

let day = days.[d.getDay()];
let month = months[d.getMonth()];
let date = d.getDate();

return `${day} ${month} ${date}`;
}

const city = "Seoul";
   const url = `${api.base}weather?q=${city}&appid=${api.key}`;
   const [weather, setWeather] = useState("");

   axios.get(url).then((responseData) => {
    const data = responseData.data;
    setWeather({
      id: data.weather[0].id,
      temperature: data.main.temp,
      main: data.weather[0].main,
      loading: false,
    });
  });

  const selectIcon = () => {
    let iconId =
      weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    switch (iconId) {
      case "0":
        return <TiWeatherSunny color="red" />;
      case "2":
        return <TiWeatherStormy color="black" />;
      case "3":
        return <TiWeatherShower color="blue" />;
      case "5":
        return <TiWeatherDownpour color="navy" />;
      case "6":
        return <TiWeatherSnow color="white" />;
      case "7":
        return <BsCloudFog color="white" />;
      case "8":
        return <TiWeatherCloudy color="white" />;
    }
};