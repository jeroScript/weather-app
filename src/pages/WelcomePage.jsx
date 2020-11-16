import React, { useMemo } from 'react'
import WelcomeComponent from '../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { IconContext } from 'react-icons'
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { WiDaySunny } from 'react-icons/wi' 

const WelcomePage = props => {

    const iconContextSize = useMemo(() => ({size:'6em'}), [])

    return (
        <WelcomeComponent>
            <Grid container
                direction="column"
                className="full"
                justify="center">
                    <div className="highlight">
                        <Grid item container xs={12} 
                            justify="center" 
                            alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={iconContextSize}>
                                    <WiDaySunny />
                                </IconContext.Provider>
                            </Grid>
                            <Grid item 
                                container 
                                direction="column"
                                justify="center"
                                alignItems="center">
                                <Typography vatiante="h4" color="inherit">
                                    Weather App
                                </Typography>
                                <Link color="inherit"
                                    aria-label='menu'
                                    component={RouterLink}
                                    to="/main">
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
            </Grid>
        </WelcomeComponent>
    )
}

WelcomePage.propTypes = {

}

export default WelcomePage
