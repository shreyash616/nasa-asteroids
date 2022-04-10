import { useEffect, useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import './App.css';
import { get, getSectionData } from './common/utils/utils'
import DataList from './common/components/ListData';

import {
  getAsteroidData,
  getDefaultAsteroidsList,
  searchAsteroids
} from './common/utils/API'

import { AppHeading, AppWrapper, DataWrapper, DetailText, DetailTitle, DetailWrapper, SectionWrapper } from './App.style';
import { formatDate, sortAsteroidDataByClosestDate } from './common/utils/utils';
import DialogModal from './common/components/DialogModal';
import { GlobalContextProvider } from './globalContext';

function App() {

  const [defaultList, setDefaultList] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalData, setModalData] = useState(null)
  const [modalId, setModalId] = useState(null)

  const [dates, setDates] = useState({
    from: new Date(),
    to: new Date()
  })

  useEffect(() => {
    getDefaultAsteroidsList().then(data => {
      setDefaultList(sortAsteroidDataByClosestDate(data).slice(0, 10))
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const handleSearchAsteroids = () => {
    setLoading(true)
    searchAsteroids(formatDate(dates.from), formatDate(dates.to)).then(data => {
      setDefaultList(sortAsteroidDataByClosestDate(data))
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  const handleModalId = (id) => {
    setModalData(null)
    setModalId(id || null)
  }

  useEffect(() => {
    const asteroidId = get(modalId, 'id')
    if (asteroidId) {
      getAsteroidData(asteroidId).then(data => {
        setModalData({
          ...data,
          missDistance: get(modalId, 'missDistance'),
          closestApproachDate: get(modalId, 'closestApproachDate')
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }, [modalId])

  const getModalBody = () => {
    if (modalData) {
      const firstSectionData = getSectionData(modalData, true)
      const secondSectionData = getSectionData(modalData)
      return <DataWrapper>
        <SectionWrapper>
          {firstSectionData.map(data => {
            return <DetailWrapper key={data.heading}>
              <DetailTitle>{data.heading}</DetailTitle>
              <DetailText>{data.value}</DetailText>
            </DetailWrapper>
          })}
        </SectionWrapper>
        <SectionWrapper>
          {secondSectionData.map(data => {
            return <DetailWrapper key={data.heading}>
              <DetailTitle>{data.heading}</DetailTitle>
              <DetailText>{data.value}</DetailText>
            </DetailWrapper>
          })}
        </SectionWrapper>
      </DataWrapper>
    }
  }

  return <GlobalContextProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppWrapper>
        <AppHeading><h1>The Search for Near Earth Objects!</h1></AppHeading>
        <DataList
          handleSearch={handleSearchAsteroids}
          handleListItemClick={handleModalId}
          listHeading='Asteroids'
          loading={loading}
          dates={dates}
          setDates={setDates}
          data={defaultList}
        />
      </AppWrapper>
      {!!modalId && <DialogModal
        title={get(modalId, 'title')}
        closeModal={handleModalId}
      >
        {getModalBody()}
      </DialogModal>}
    </LocalizationProvider>
  </GlobalContextProvider>
}

export default App;
