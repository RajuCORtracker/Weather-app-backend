const weatherModel = require('../models/weatherModel');

exports.getCurrentWeather = async (req, res) => {
  try {
    const location = req.params.location;
    const weatherData = await weatherModel.getCurrentWeather(location);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
