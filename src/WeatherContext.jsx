import React, { useContext, useReducer } from 'react'


const WeatherStateContext = React.createContext()

const WeatherDispatchContext = React.createContext()

const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'SET_CHART_DATA': {
            const chartDataCity = action.payload;
            const newChartData = {...state.chartData, ...chartDataCity}
            return {...state, allChartData: newChartData}
        }
            
        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemListCity = action.payload
            const newForecastItemList = {...state.forecastItemList, ...forecastItemListCity}
            return {...state, allForecastItemList: newForecastItemList}

        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather =  {...state.allWeather, ...weatherCity} 
            return { ...state, allWeather: newAllWeather}
        default:
            return state
    }
}


const WeatherContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue)
    
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}


const useWeatherDispatchContext = () => {
    const dispatch = useContext(WeatherDispatchContext)
    if (!dispatch) {
        throw Error("Must set dispatch provider")
    }
    return dispatch
}

const useWeatherStateContext = () => {
    const state = useContext(WeatherStateContext)
    if (!state) {
        throw Error("Must set state provider")
    }
    return state
}


export {
   WeatherContext,
   useWeatherStateContext,
   useWeatherDispatchContext
}