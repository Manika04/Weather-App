import React from 'react'
import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCity = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;

const SearchBox= styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 2px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;

    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold
    }

    & button{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
        color: white;
        background-color: black;
        cursor: pointer;
    }
`

function CityComponent(props) {
    const {updateCity, fetchWeather} = props
  return (
    <>
        <WeatherLogo src='/icons/perfect-day.svg'/>
        <ChooseCity>Find the Weather of Your City</ChooseCity>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder='Enter your city' onChange={(e) => updateCity(e.target.value)}/>
            <button type='submit'>Search</button>
        </SearchBox>
    </>
  )
}

export default CityComponent