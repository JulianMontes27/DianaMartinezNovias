import React from 'react'
import './Home.css'
import ClickTo from './ClickTo'
import Shop from './Shop'

const Home = () => {

    const onClickCollection= ()=>{
        console.log('works')
    }
  return (
    <>
    <div className='middle_container'>
        <h1>DIANA MARTÍNEZ</h1>
        
        <h4>NOVIAS & ALTA COSTURA</h4>
        
        <ClickTo mensaje= {'Haz click para ver la colección 2022 '} onClickCollection= {onClickCollection} color='purple'/>
        <Shop/>
    </div>
    </>
  )
}

export default Home
