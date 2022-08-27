import React from 'react'
import './Shop.css'

const Shop = () => {
  return (
    <div className='container'>
        <div>
          <h2 
          className='container_title'>
            Nuestros diseños
          </h2>

          <div style={{marginTop:'100px'}} className='vestidos_container'>
          
            <div className='denovia'>
              <h2> Vestidos de Novias </h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting.
              <br></br>
              <br></br>
              <a style={{fontSize:'19px', textDecorationLine:'underline', cursor:'pointer'}}> Ver mas vestidos </a>
              </p>
              <img 
                className='foto_vestidos' 
                src='https://www.dianamartinez.com.co/images/banner-01.jpg'
                alt='foto de vestido de novias'>
                </img>
            </div>

          </div>

          <div style={{marginTop:'50px'}} className='vestidos_container'>
          
            <div className='denovia'>
              <h2 style={{color:'#E5CCFF'}}> Vestidos de Alta Costura </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting.
                <br></br>
                <br></br>
                <a style={{fontSize:'19px', textDecorationLine:'underline', cursor:'pointer'}}> Ver mas vestidos </a>  
              </p>
              <img 
                className='foto_vestidos' 
                src='https://www.dianamartinez.com.co/images/altacostura2010/alta-costura-06.jpg'
                alt='foto de vestido de novias'>
                </img>
            </div>

          </div>
          
        </div>

    </div>
  )
}

export default Shop
