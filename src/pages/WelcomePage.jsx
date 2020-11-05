import React from 'react'
import WelcomeComponent from '../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'

const WelcomePage = props => {
    return (
        <WelcomeComponent>
            <Grid container
                direction="column"
                className="full"
                justify="center">
                    <div className="highlight">

                    </div>
            </Grid>
        </WelcomeComponent>
    )
}

WelcomePage.propTypes = {

}

export default WelcomePage
