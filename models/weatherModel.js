const request = require('request-promise');
require('dotenv').config();

exports.getCurrentWeather = async (location) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const response = await request(url);
  const weatherData = JSON.parse(response);
  console.log(weatherData);
  const formattedData = {
    location: weatherData.name,
    temperature: weatherData.main.temp,
    description: weatherData.weather[0].description,
  };

  return formattedData;
};
