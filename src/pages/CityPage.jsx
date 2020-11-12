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
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCities'


const CityPage = ({data, actions}) => {
    const { allWeather, allChartData, allForecastItemList } = data // tambien se puede hacer con data.allWeather
    const { onSetAllWeather, onSetChartData, onSetForecastItemList} = actions
    const {city, countryCode} = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList)
    
    const cities = React.useMemo( () => ([{city, countryCode}]), [city, countryCode])

    useCityList(cities, allWeather, onSetAllWeather)

    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]
    
    const country = countryCode && getCountryNameByCountryCode(countryCode)

    const state =  weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
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
                <Grid 
                    container item 
                    xs={12} 
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    {
                        humidity && wind &&
                        <WeatherDetails humidity={humidity} wind={wind} />
                    }
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
