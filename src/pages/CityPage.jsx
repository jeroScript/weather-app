import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import moment from 'moment'
import AppFrame from '../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
	{ hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
	{ hour: 12, state:"rain", temperature:18, weekDay:"Viernes" },
	{ hour: 18, state:"snow", temperature:19, weekDay:"Viernes" },
	{ hour: 6, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 12, state:"rain", temperature:17, weekDay:"Sábado" }, 
]

const CityPage = () => {

    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    
    const {city, countryCode} = useParams();
    
    useEffect( () => {
        const getForecast = async () => {
            const apiKey = '4e2de8681516bdf3ecf7ff69162b4a3d';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
            
            try {
                const {data} = await axios.get(url)        
                
                const daysAhead = [0,1,2,3,4,5]
                const days = daysAhead.map( d => moment().add(d,'d'))
                const dataAux = days.map(d => {
                    return ({
                        dayHour: d.format('ddd') ,
                        min: 20,
                        max: 34
                    })
                })
                setData(dataAux)
                setForecastItemList(forecastItemListExample)
            } catch (error) {
                console.log(error)
            }
        }
        getForecast();
    }, [city, countryCode])

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
                <Grid item >
                    {
                        data && <ForecastChart data={data} />
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
