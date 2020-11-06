import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from "@material-ui/core/Paper"
import CityList from './../components/CityList/CityList'
import AppFrame from '../components/AppFrame'

const cities = [
    {city:'Mendoza',country: 'Argentina', countryCode: 'AR'},
    {city:'Cusco',country: 'Peru', countryCode: 'PE'},
    {city:'montevideo',country: 'Uruguay', countryCode: 'UY'}
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
