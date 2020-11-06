import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import CityList from './CityList';

const cities = [
    {city:'Mendoza',country: 'Argentina', countryCode: 'AR'},
    {city:'Cusco',country: 'Peru', countryCode: 'PE'},
    {city:'montevideo',country: 'Uruguay', countryCode: 'UR'}
]

test('CityList render ', async () => {
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);

    const citiesElement = await findAllByRole("button");

    expect(citiesElement).toHaveLength(3)
})

test("CityList Click on item", async () => {
    const fnClickOnItem = jest.fn()
    
    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);

    const items = await findAllByRole("button");

    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})

