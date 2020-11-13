import React, {useReducer} from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
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

    const [state, dispatch] = useReducer(reducer, initialValue)

    // const [allWeather, setallWeather] = useState({})
    // const [allChartData, setAllChartData] = useState({})
    // const [allForecastItemList, setAllForecastItemList] = useState({})

    // const onSetChartData = useCallback( (chartDataCity) => (
    //     setAllChartData( chartData => ({...chartData, ...chartDataCity}))
    // ), [setAllChartData])

    // const onSetForecastItemList = useCallback ( (forecastItemListCity) => (
    //     setAllForecastItemList( forecastItemList => ({...forecastItemList, ...forecastItemListCity}))
    // ), [setAllForecastItemList])

    // const onSetAllWeather = useCallback((weatherCity) => {
    //     setallWeather( allWeather => {
    //         return ( {...allWeather, ...weatherCity} )
    //     })
    // }, [setallWeather])


    // const actions = useMemo( () => (
    //     {
    //         onSetAllWeather,
    //         onSetChartData, 
    //         onSetForecastItemList
    //     }
    // ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

    // const data  = useMemo(() => (
    //     {
    //         allWeather,
    //         allChartData,
    //         allForecastItemList
    //     }
    // ), [allWeather, allChartData, allForecastItemList]
    // )
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                <WelcomePage/>
                </Route>
                <Route path="/main">
                    <MainPage data={state} actions={dispatch}/>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={state} actions={dispatch}/>
                </Route>
                <Route >
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
