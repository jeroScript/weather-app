import React from 'react'
import {render} from "@testing-library/react"
import Weather from './Weather'

test('Weather render', async () => {

    const {findByRole} = render(<Weather temperature={10} state={"clear"}/>);

    const temp = await findByRole("heading");
    
    expect(temp).toHaveTextContent('10')
})
