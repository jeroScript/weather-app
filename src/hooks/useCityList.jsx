import { useEffect, useState } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'


const useCityList = (cities, allWeather, onSetAllWeather) => {

    // const [allWeather, setallWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode});
            try {
                const propName = getCityCode(city,countryCode)
                onSetAllWeather({[propName]: {}})

                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)

                // setallWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
                onSetAllWeather(allWeatherAux)
            } catch (error) {
                if (error.response) { // error q nos responde el server
                    const {data, status} = error.response
                    console.log("setWeather -> data", data)
                    console.log("setWeather -> status", status)
                    setError('Ha ocurrido un error en el servidor del clima')
                } else if (error.request ) {
                    console.log('Server in-accesible o no tengo internet')
                    setError('Verifique la conexion a internet')
                } else {
                    console.log('Error imprevisto')
                    setError('Error al cargar los datos')
                }
            }
        }
        cities.forEach( ({city, countryCode}) => {
            if(!allWeather[getCityCode(city,countryCode)]) {
                setWeather(city, countryCode)
            }
        });
    }, [cities, allWeather, onSetAllWeather])

    return { error, setError}

}

export default useCityList