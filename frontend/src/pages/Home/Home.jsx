import './Home.css'
// import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {   
  const [category,setcategory] = useState("All");
  return (
    <>
    {/* <Header/> */}
    <ExploreMenu category={category} setCategory={setcategory}/>
    <FoodDisplay category={category}/>
    </>
  )
}

export default Home