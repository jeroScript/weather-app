import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiCloud,
    WiDayCloudy,
    WiSunset,
    WiRain,
    WiDayFog,
} from 'react-icons/wi'

export   const validValues = [ 
    'cloud',
    'cloudy',
    'sunny',
    'fog',
    'rain'
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    sunny: WiSunset,
    fog: WiDayFog,
    rain: WiRain
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return <StateByName />
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState


