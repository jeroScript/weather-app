import React, {useState, useCallback, useMemo} from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    const [allWeather, setallWeather] = useState({})
    const [allChartData, setAllChartData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetChartData = useCallback( (chartDataCity) => (
        setAllChartData( chartData => ({...chartData, ...chartDataCity}))
    ), [setAllChartData])

    const onSetForecastItemList = useCallback ( (forecastItemListCity) => (
        setAllForecastItemList( forecastItemList => ({...forecastItemList, ...forecastItemListCity}))
    ), [setAllForecastItemList])

    const onSetAllWeather = useCallback((weatherCity) => {
        setallWeather( allWeather => {
            return ( {...allWeather, ...weatherCity} )
        })
    }, [setallWeather])


    const actions = useMemo( () => (
        {
            onSetAllWeather,
            onSetChartData, 
            onSetForecastItemList
        }
    ), [onSetAllWeather, onSetChartData, onSetForecastItemList])

    const data  = useMemo(() => (
        {
            allWeather,
            allChartData,
            allForecastItemList
        }
    ), [allWeather, allChartData, allForecastItemList]
    )
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                <WelcomePage/>
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions}/>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data={data} actions={actions}/>
                </Route>
                <Route >
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
