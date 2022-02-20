import axios from 'axios'
import { get } from './utils'

axios.defaults.params = {}
axios.defaults.params['api_key'] = 'eaC5wZf4cEINannGxv8pRpLFN83rg5ym273c21lq'

export const getDefaultAsteroidsList = () => new Promise((resolve, reject) => {
    axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse').then(({ data }) => {
        resolve(get(data, 'near_earth_objects', []))
    }).catch(err => reject(err))
})

export const searchAsteroids = (start_date, end_date) => new Promise((resolve, reject) => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}`).then(({ data }) => {
        resolve(Object.values(get(data, 'near_earth_objects', [])).reduce((resolvedArr, currentValue) => {
            return [...resolvedArr, ...currentValue]
        }, []))
    }).catch(err => reject(err))
})

export const getAsteroidData = (asteroidId) => new Promise((resolve, reject) => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}`).then(({ data }) => {
        resolve(data)
    }).catch(err => reject(err))
})