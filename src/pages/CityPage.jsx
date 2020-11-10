import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppFrame from '../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import useCityPage from '../hooks/useCityPage'


const CityPage = () => {

    const {city, chartData, forecastItemList} = useCityPage()
    
    const country = "Argentina"
    const state = "clear"
    const temperature = 20
    const humidity = 80
    const wind = 5
    // const data = dataExample
    // const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container
                justify="center"
                direction="column"
                spacing={2}>
                <Grid item container 
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}>
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress/>
                    }
                </Grid>
                <Grid item >
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

CityPage.propTypes = {

}

export default CityPage
