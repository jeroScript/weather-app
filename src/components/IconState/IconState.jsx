import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiCloud,
    WiSunset,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiDayHaze,
} from 'react-icons/wi'

export   const validValues = [ 
    'clouds',
    'clear',
    'rain',
    'snow',
    'drizzle',
    'thunderstorm',
    'haze'
]

const stateByName = {
    clouds: WiCloud,
    clear: WiSunset,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    haze: WiDayHaze
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return <StateByName />
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState


