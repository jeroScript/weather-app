const cities = [
    {city:'Mendoza',country: 'Argentina', countryCode: 'AR'},
    {city:'Cusco',country: 'Peru', countryCode: 'PE'},
    {city:'montevideo',country: 'Uruguay', countryCode: 'UY'}
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)