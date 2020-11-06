import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'
import convertUnits from 'convert-units'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { List, ListItem } from '@material-ui/core';

const renderCityAndCountry = (eventOnClickCity) => {
    const renderCityAndCountryInternal = (cityAndCountry, weather) => {
        const {city, country} = cityAndCountry;
        return (
            <ListItem 
                button 
                key={city} 
                onClick={eventOnClickCity}>
                <Grid container
                    justify="center"
                    alignItems="center"
                >
                    <Grid item
                        md={8}
                        xs={12}
                    >
                        <CityInfo city={city} country={country}/>
                    </Grid>
                    <Grid item
                        md={3}
                        xs={12} >
                        <Weather 
                            temperature={weather && weather.temperature} 
                            state={weather && weather.state}/>
                    </Grid>
                </Grid>

            </ListItem> 
        )
    }
    return renderCityAndCountryInternal
}

const CityList = ({cities, onClickCity}) => {

    const [allWeather, setallWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const apiKey = '4e2de8681516bdf3ecf7ff69162b4a3d';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
            axios
            .get(url)
            .then(response => {
                const {data} = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to("C").toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                const propName = `${city}-${country}`; // Ej: [Mendoza-Argentina]
                const propValue = { temperature, state} // Ej: { temperature: 10, state: "sunny" }

                setallWeather(allWeather => ( { ...allWeather, [propName]:propValue } ))
            })
            .catch( error => {
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
            })
        }
        cities.forEach( ({city, country, countryCode}) => {
            setWeather(city, country, countryCode)
        });
    }, [cities])

    // const weather = {temperature: 10, state: 'sunny'}
    const funcAux = renderCityAndCountry(onClickCity)

    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map( cityAndCountry => funcAux(cityAndCountry, 
                        allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickcity: PropTypes.func.isRequired,
}

export default CityList




