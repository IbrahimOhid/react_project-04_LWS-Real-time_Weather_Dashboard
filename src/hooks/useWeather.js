import { useState } from 'react'


const useWeather = ()=>{
    const [weather, setWeather] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        latitude: '',
        longitude: ''
    })

    const [loading, setLoading] = useState({
        state: false,
        message: ''
    })
    const [error, seterror] = useState(null)
}