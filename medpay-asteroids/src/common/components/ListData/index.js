import { get } from '../../utils/utils'

import DateInputs from '../DatePickers'
import Loader from '../Loader'

import { ChevronRight } from '../../utils/icons'

import {
    ListWrapper,
    ListItemWrapper,
    ListDetailsWrapper,
    ListTitle,
    ListSubTitle,
    ListWithInput,
    ListHeading,
    IconWrapper
} from './styles'

const ListItem = ({
    title = '',
    subtitle = '',
    handleClick
}) => {
    return <ListItemWrapper onClick={handleClick}>
        <ListDetailsWrapper>
            <ListTitle>{title}</ListTitle>
            <ListSubTitle>{subtitle}</ListSubTitle>
        </ListDetailsWrapper>
        <IconWrapper><ChevronRight /></IconWrapper>
    </ListItemWrapper>
}

const DataList = ({
    listHeading = '',
    data = [],
    dates,
    setDates,
    loading,
    handleListItemClick,
    handleSearch
}) => {

    const getListItemProps = data => ({
        title: get(data, 'name'),
        subtitle: `Closest approach date - ${new Date(get(data, 'closestApproachDate')).toDateString()}`,
        handleClick: () => handleListItemClick({
            id: get(data, 'id'),
            title: get(data, 'name'),
            closestApproachDate: get(data, 'closestApproachDate')
        })
    })

    return <ListWithInput>
        <DateInputs handleSearch={handleSearch} dates={dates} setDates={setDates} />
        {loading
            ? <Loader autoHeight />
            : <ListWrapper>
                <ListHeading>{listHeading}</ListHeading>
                <div>
                    {data.map(itemData => <ListItem {...getListItemProps(itemData)} />)}
                </div>
            </ListWrapper>}
    </ListWithInput>
}

export default DataList