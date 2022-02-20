import get from 'lodash/get'
import debounce from 'lodash/debounce'

const sortAsteroidsByClosestDate = (data) => {
    const updatedData = [...data]
    updatedData.sort((dataA, dataB) => {
        const currentDate = new Date()
        const dateA = new Date(get(dataA, 'closestApproachDate', ''))
        const dateB = new Date(get(dataB, 'closestApproachDate', ''))
        const distancea = Math.abs(currentDate - new Date(dateA));
        const distanceb = Math.abs(currentDate - new Date(dateB));
        return distancea - distanceb;
    })
    return updatedData
}

const getClosestApproachDate = (asteroidData) => {
    const approachData = get(asteroidData, 'close_approach_data', []).map(data => get(data, 'close_approach_date', ''))
    approachData.sort((date1, date2) => {
        const currentDate = new Date()
        const distancea = Math.abs(currentDate - new Date(date1));
        const distanceb = Math.abs(currentDate - new Date(date2));
        return distancea - distanceb;
    })
    return approachData[0]
}

const sortAsteroidDataByClosestDate = data => {
    return sortAsteroidsByClosestDate(data.map(datum => ({
        ...datum,
        closestApproachDate: getClosestApproachDate(datum)
    })))
}

const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const detailsHeadings = [
    {
        'id': 'NEO reference ID',
        'estimated_diameter': 'Estimated diameter',
        'absolute_magnitude_h': 'Absolute magnitude',
    },
    {
        'closestApproachDate': 'Closest approach date',
        'is_potentially_hazardous_asteroid': 'Is potentially hazardous?',
        'orbital_data': 'First observation date'
    }
]

const getSectionData = (data, isFirstSection) => {
    if (isFirstSection) {
        const headings = detailsHeadings[0]
        return Object.keys(headings).map(key => {
            const heading = headings[key]
            let value
            if (key === 'id') {
                value = data[key]
            } else if (key === 'estimated_diameter') {
                value = `${get(data, 'estimated_diameter.kilometers.estimated_diameter_max', 0).toFixed(2)} kms`
            } else {
                value = get(data, 'absolute_magnitude_h', 0)
            }
            return {
                heading,
                value
            }
        })
    } else {
        const headings = detailsHeadings[1]
        return Object.keys(headings).map(key => {
            const heading = headings[key]
            let value
            if (key === 'closestApproachDate') {
                value = new Date(data[key]).toDateString()
            } else if (key === 'is_potentially_hazardous_asteroid') {
                value = get(data, 'is_potentially_hazardous_asteroid', false) ? 'Yes' : 'No'
            } else {
                value = new Date(get(data, 'orbital_data.first_observation_date', '')).toDateString()
            }
            return {
                heading,
                value
            }
        })
    }
}

export {
    get,
    debounce,
    sortAsteroidDataByClosestDate,
    formatDate,
    getSectionData
}