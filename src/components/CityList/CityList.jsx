import React from 'react'
import PropTypes from 'prop-types';
import useCityList from '../../hooks/useCityList'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { List, ListItem } from '@material-ui/core';
import { getCityCode } from './../../utils/utils'


const renderCityAndCountry = (eventOnClickCity) => {
    const renderCityAndCountryInternal = (cityAndCountry, weather) => {
        const {city, countryCode, country} = cityAndCountry;
        return (
            <ListItem 
                button 
                key={getCityCode(city,countryCode)} 
                onClick={() => eventOnClickCity(city, countryCode)}>
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



const CityList = ({cities, onClickCity, allWeather, onSetAllWeather}) => {

    const { error, setError } = useCityList(cities, onSetAllWeather)
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
                        allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]
                    ))
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




