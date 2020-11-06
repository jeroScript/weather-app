import React from 'react'
import WelcomeComponent from '../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { IconContext } from 'react-icons'
import { Link as RouterLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { WiRain } from 'react-icons/wi' 

const NotFoundPage = props => {
    return (
        <Grid container
            direction="column"
            className="full"
            justify="center">
                <div className="highlight">
                    <Grid item container xs={12} 
                        justify="center" 
                        alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{size: "6em"}}>
                                <WiRain />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item 
                            container 
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Typography vatiante="h4" color="inherit">
                                404 | La pagina no existe
                            </Typography>
                            <Link color="inherit"
                                aria-label='menu'
                                component={RouterLink}
                                to="/main">
                                Volver al inicio
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
    )
}



export default NotFoundPage
