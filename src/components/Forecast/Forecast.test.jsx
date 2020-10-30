import React from 'react'
import {render} from '@testing-library/react'
import Forecast from './Forecast'

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

test('Forescast render', async () => {
    const { findAllByTestId } =  render(<Forecast forecastItemList={listForecastItem} /> )

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(4)
})
