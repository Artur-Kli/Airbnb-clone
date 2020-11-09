import React from 'react'
import { useHistory } from 'react-router-dom'
import './Banner.css'
import { Button } from '@material-ui/core'

const Banner = () => {
  const history = useHistory()

  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Ближние поездки — новый тренд</h1>
        <h5>Обоснуйтесь на новом месте. Рассмотрите варианты для жизни, работы и отдыха.</h5>
        <Button onClick={() => history.push('/search')} variant="outlined">Жилье поблизости</Button>
      </div>
    </div>
  )
}

export default Banner
