import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor inventore possimus, quasi nam optio illo accusantium repellendus consequatur quas! Molestiae similique, facere praesentium natus itaque impedit qui eum fugit.
        </AppFrame>
    </Router> 
)