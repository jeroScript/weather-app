import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import IconState, {validValues} from '../IconState/Index'
import { IconContext } from 'react-icons'
import { useMemo } from 'react'

const ForecastItem = ({ weekDay, hour, state, temperature}) => {
    const iconContectSize = useMemo(() => ({size: '5em'}), [])
    
    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <Grid item>
                <Typography>{weekDay} </Typography>
            </Grid>
            <Grid item>
                <Typography>{hour} </Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={iconContectSize} >
                    <IconState state={state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature} º</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
