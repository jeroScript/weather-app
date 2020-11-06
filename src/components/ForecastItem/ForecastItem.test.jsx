import { render } from '@testing-library/react'
import React from 'react'
import ForecastItem from './ForecastItem'

test('ForecastItem render ', async () => {
    
    const {findByText} = render(<ForecastItem hour={10} state="clear" temperature={23} weekDay={"Lunes"}/>)

    const temp = await findByText(/23/)
    const hour = await findByText(/10/)
    const day = await findByText(/Lunes/);

    expect(temp).toHaveTextContent("23 º")


})

