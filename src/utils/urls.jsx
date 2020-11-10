const apiKey = '4e2de8681516bdf3ecf7ff69162b4a3d';
export const getWeatherUrl = ({city,countryCode}) =>  `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
export const  getForecastUrl = ({city,countryCode}) => `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;
