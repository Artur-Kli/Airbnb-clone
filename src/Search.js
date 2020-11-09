import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People'
import { Button } from '@material-ui/core'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Search.css'

const Search = () => {
  const history = useHistory()
  const  [startDate, setStartDate] = useState(new Date())
  const  [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className="search">
      <DateRangePicker
        className="search__dataRangePicker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h3>
        Количество гостей
        <PeopleIcon />
      </h3>
      <input min={0} defaultValue={2} type="number" />
      
      <Button onClick={() => history.push('/search')}>Поиск Airbnb</Button>
    </div>
  )
}

export default Search
