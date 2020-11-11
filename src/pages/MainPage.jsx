import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from "@material-ui/core/Paper"
import CityList from './../components/CityList/CityList'
import AppFrame from '../components/AppFrame'
import { getCities } from './../utils/serviceCities'


const MainPage = ({allWeather, onSetAllWeather}) => {
    
    const history = useHistory() 

    const onClickHandler = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }


    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList 
                    allWeather={allWeather}
                    onSetAllWeather={onSetAllWeather}
                    cities={getCities()}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {

}

export default MainPage
