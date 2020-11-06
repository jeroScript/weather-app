import React from 'react'
import {render} from '@testing-library/react'
import Forecast from './Forecast'

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

test('Forescast render', async () => {
    const { findAllByTestId } =  render(<Forecast forecastItemList={listForecastItem} /> )

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(4)
})
