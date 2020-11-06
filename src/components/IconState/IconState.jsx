import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiCloud,
    WiSunset,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
} from 'react-icons/wi'

export   const validValues = [ 
    'clouds',
    'clear',
    'rain',
    'snow',
    'drizzle',
    'thunderstorm'
]

const stateByName = {
    clouds: WiCloud,
    clear: WiSunset,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return <StateByName />
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState


