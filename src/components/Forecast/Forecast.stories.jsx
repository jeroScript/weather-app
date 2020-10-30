import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const listForecastItem = [
    {
        weekDay: "Domingo",
        hour: 21,
        state: 'fog',
        temperature: 23
    },
    {
        weekDay: "Maretes",
        hour: 22,
        state: 'cloudy',
        temperature: 21
    },
    {
        weekDay: "lunes",
        hour: 21,
        state: 'cloud',
        temperature: 23
    },
    {
        weekDay: "viernes",
        hour: 21,
        state: 'fog',
        temperature: 2
    }
]

export const ForecastExample = () => (<Forecast forecastItemList={listForecastItem} />)