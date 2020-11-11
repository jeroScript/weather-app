import React, {useState, useMemo} from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    const [allWeather, setallWeather] = useState({})



    const onSetAllWeather = useMemo( () => ((weatherCity) => {
        setallWeather( allWeather => {
            return ( {...allWeather, ...weatherCity} )
        })
    }), [setallWeather])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                <WelcomePage/>
                </Route>
                <Route path="/main">
                    <MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}/>
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather}/>
                </Route>
                <Route >
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
