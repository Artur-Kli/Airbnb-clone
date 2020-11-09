import React from 'react'
import { Button } from '@material-ui/core'
import './Impression.css'
import CardImpression from './CardImpression'

const Impression = () => {
  return (
    <div className="impression__content">
      <div className="impression__info">
        <div className="impression_infoText">
          <h2>Онлайн-Впечатления</h2>
          <h4>Знакомьтесь с людьми со всего мира и пробуйте новое. Интерактивные мероприятия от увлеченных организаторов — прямо у вас дома.</h4>
        </div>
        <Button>Смотреть все</Button>
      </div>
      <div className="impression__card">
        <div className="impression__cardLeft">
          <CardImpression src="https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg" title="Уникальное жилье" description="Больше, чем место для ночлега." />
        </div>
        <div className="impression__cardRight">
          <div className="impression__cardRightTop">
              <CardImpression src="https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg" title="Уникальное жилье" description="Больше, чем место для ночлега." />
              <CardImpression src="https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg" title="Уникальное жилье" description="Больше, чем место для ночлега." />
          </div>
          <div className="impression__cardRightBottom">
            <CardImpression src="https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg" title="Уникальное жилье" description="Больше, чем место для ночлега." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impression
