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
        state: 'snow',
        temperature: 23
    },
    {
        weekDay: "Maretes",
        hour: 22,
        state: 'clouds',
        temperature: 21
    },
    {
        weekDay: "lunes",
        hour: 21,
        state: 'clouds',
        temperature: 23
    },
    {
        weekDay: "viernes",
        hour: 21,
        state: 'clear',
        temperature: 2
    }
]

export const ForecastExample = () => (<Forecast forecastItemList={listForecastItem} />)