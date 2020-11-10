import { getCityCode, toCelsius } from './../utils';
import { validValues } from './../../components/IconState/IconState'

const getAllWeather = (response, city, countryCode) => {
    const {data} = response
    const temperature = toCelsius(data.main.temp)
    const stateFromServer =  data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null 
    console.log("setWeather -> state", state)

    const propName = getCityCode(city,countryCode); // Ej: [Mendoza-Argentina]
    const propValue = { temperature, state} // Ej: { temperature: 10, state: "sunny" }

    return ({ [propName]: propValue })
}

export default getAllWeather