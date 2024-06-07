import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDowload from '../../components/AppDowload/AppDowload'

const Home = () => {   
  const [category,setcategory] = useState("All");
  return (
    <>
    <Header/>
    <ExploreMenu category={category} setCategory={setcategory}/>
    <FoodDisplay category={category}/>
    <AppDowload/>
    </>
  )
}

export default Home