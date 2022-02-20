import Spinner from '@mui/material/CircularProgress'
import { SpinnerWrapper } from './styles'

const Loader = ({
    autoHeight = false
}) => {
    return <SpinnerWrapper autoHeight={autoHeight}>
        <Spinner />
    </SpinnerWrapper>
}

export default Loader