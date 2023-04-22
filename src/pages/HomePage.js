import React from 'react';
import Header from '../components/Header';
import { Container } from '@mui/material';
import FiltComp from '../components/FiltComp';
import Cards from '../components/Cards';
import  { useEffect, useState } from "react"

const HomePage = () => {
    const [data, setData]=useState([])
    
    const fetchUserData = () => {
  
     fetch("https://precious-lime-kimono.cyclic.app/api/restaurant")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setData(data)
       })
     }
       useEffect(() => {
         fetchUserData()
       }, [fetchUserData])
  return (
  <Container maxWidth="xl">
    <Header/>
    <FiltComp  data={data} setData={setData}/>
    <Cards data={data} setData={setData}/>
    
    
  </Container>
  );
}

export default HomePage;
