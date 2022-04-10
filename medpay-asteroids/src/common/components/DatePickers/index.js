import { DateInputWrapper, DatePickerWrapper, DateTextBox, SearchButton } from './styles'
import { DatePicker } from '@mui/lab'
import { TextField } from '@mui/material'

import { get } from '../../utils/utils'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../../globalContext'

const DateInputs = ({
    dates,
    setDates,
    handleSearch
}) => {

    const { showToast } = useGlobalContext()

    const [dateError, setDateError] = useState(!get(dates, 'from') || !get(dates, 'to'))

    useEffect(() => {
        if (dates.from && dates.to) {
            const fromDateEpoch = dates.from.getTime()
            const toDateEpoch = dates.to.getTime()
            if (fromDateEpoch > toDateEpoch) {
                setDateError(true)
                showToast('From date should be on or before the to date. Please check.')
            } else {
                setDateError(false)
            }
        } else {
            setDateError(true)
        }
    }, [dates])

    const handleDate = (value, selector) => {
        setDates({
            ...dates,
            [selector]: value
        })
    }

    return <DateInputWrapper>
        <DatePickerWrapper>
            <DatePicker
                label={'From'}
                value={dates.from}
                onChange={value => handleDate(value, 'from')}
                renderInput={(params) => <DateTextBox><TextField {...params} /></DateTextBox>}
            />
            <DatePicker
                label={'To'}
                value={dates.to}
                onChange={value => handleDate(value, 'to')}
                renderInput={(params) => <DateTextBox><TextField {...params} /></DateTextBox>}
            />
        </DatePickerWrapper>
        <SearchButton disabled={dateError} onClick={() => !dateError && handleSearch()}>Search</SearchButton>
    </DateInputWrapper>
}

export default DateInputs