import React from 'react'
import { Button } from '@material-ui/core'
import './SearchPage.css'
import SearchResult from './SearchResult'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>Более 300 вариантов жилья</p>
        <h1>Жилье поблизости</h1>
        <Button variant="outlined">Гибкие правила отмены</Button>
        <Button variant="outlined">Жилье целиком</Button>
        <Button variant="outlined">Цена</Button>
        <Button variant="outlined">Мгновенное бронирование</Button>
        <Button variant="outlined">Другие фильтры</Button>
      </div>
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/16faa011-4d94-47b9-a757-1bfacb7aae8b.jpg"
        location="Дом целиком в г. Замошье"
        title="Солнечный дом на берегу озера"
        description="7 гостей · 2 спальни · 3 кровати · 1,5 ванны"
        star="4.73"
        price="2 113 ₽ / за ночь"
        total="21 1238 ₽"
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/f0f38fd5-03e8-4f86-be89-a9404ce02ccb.jpg"
        location="Дом целиком в г. Замошье"
        title="Солнечный дом на берегу озера"
        description="7 гостей · 2 спальни · 3 кровати · 1,5 ванны"
        star="4.73"
        price="2 113 ₽ / за ночь"
        total="21 1238 ₽"
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/16faa011-4d94-47b9-a757-1bfacb7aae8b.jpg"
        location="Дом целиком в г. Замошье"
        title="Солнечный дом на берегу озера"
        description="7 гостей · 2 спальни · 3 кровати · 1,5 ванны"
        star="4.73"
        price="2 113 ₽ / за ночь"
        total="21 1238 ₽"
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/f0f38fd5-03e8-4f86-be89-a9404ce02ccb.jpg"
        location="Дом целиком в г. Замошье"
        title="Солнечный дом на берегу озера"
        description="7 гостей · 2 спальни · 3 кровати · 1,5 ванны"
        star="4.73"
        price="2 113 ₽ / за ночь"
        total="21 1238 ₽"
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/16faa011-4d94-47b9-a757-1bfacb7aae8b.jpg"
        location="Дом целиком в г. Замошье"
        title="Солнечный дом на берегу озера"
        description="7 гостей · 2 спальни · 3 кровати · 1,5 ванны"
        star="4.73"
        price="2 113 ₽ / за ночь"
        total="21 1238 ₽"
      />
    </div>
  )
}

export default SearchPage
