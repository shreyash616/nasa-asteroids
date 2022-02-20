import { DateInputWrapper, DatePickerWrapper, DateTextBox, SearchButton } from './styles'
import { DatePicker } from '@mui/lab'
import { TextField } from '@mui/material'

import { get } from '../../utils/utils'

const DateInputs = ({
    dates,
    setDates,
    handleSearch
}) => {

    const handleDate = (value, selector) => {
        setDates({
            ...dates,
            [selector]: value
        })
    }

    const searchDisabled = !get(dates, 'from') || !get(dates, 'to')

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
        <SearchButton disabled={searchDisabled} onClick={() => !searchDisabled && handleSearch()}>Search</SearchButton>
    </DateInputWrapper>
}

export default DateInputs