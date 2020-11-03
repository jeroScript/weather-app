import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from "@material-ui/core/Paper"
import CityList from './../components/CityList/CityList'
import AppFrame from '../components/AppFrame'

const cities = [
    {city:'buenos aires',country: 'Argentina'},
    {city:'Cusco',country: 'Peru'},
    {city:'montevideo',country: 'Uruguay'}
]

const MainPage = () => {
    
    const history = useHistory() 

    const onClickHandler = () => {
        history.push('/city')
    }


    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList 
                    cities={cities}
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {

}

export default MainPage
