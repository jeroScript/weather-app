import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { List, ListItem } from '@material-ui/core';

const renderCityAndCountry = (eventOnClickCity) => {
    const renderCityAndCountryInternal = cityAndCountry => {
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
                        md={4}
                        xs={12}
                    >
                        <Weather temperature={10} state={'fog'}/>
                    </Grid>
                </Grid>

            </ListItem> 
        )
    }
    return renderCityAndCountryInternal
}

const CityList = ({cities, onClickCity}) => {
    const funcAux = renderCityAndCountry(onClickCity)

    return (
        <List>
            {
                cities.map( city => funcAux(city))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickcity: PropTypes.func.isRequired,
}

export default CityList
