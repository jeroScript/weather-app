import React from 'react'
import CityList from './CityList'
import {action}  from '@storybook/addon-actions'
    
export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city:'buenos aires',country: 'Argentina'},
    {city:'Cusco',country: 'Peru'},
    {city:'montevideo',country: 'Uruguay'}
]

export const CityListExample = () => (<CityList cities={cities} onClickCity={action("click en city")}/>)