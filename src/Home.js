import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import Impression from './Impression'

const Home = () => {
  return (
    <div className=" home">
      <Banner />
      <div className="home__section">
        <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg" title="Уникальное жилье" description="Больше, чем место для ночлега." />
        <Card src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg" title="Онлайн-Впечатления" description="Уникальные совместные занятия от организаторов со всего мира." />
        <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg" title="Жилье целиком" description="Комфортное частноежилье, где найдется место друзьям или родственникам." />
      </div>
      <div className="home__impression">
        <div className="home__impressionContext">
          <Impression />
        </div>
      </div>
    </div>
  )
}

export default Home
