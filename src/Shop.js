import React from 'react'
import './Shop.css'

const Shop = () => {

  const anchorOnChange_1= ()=>{
    let img_1= document.getElementById('foto1')
    
    if(img_1.src==='https://www.dianamartinez.com.co/images/banner-01.jpg'){
      img_1.src='https://asset1.zankyou.com/images/wervice-card-big/5e2/3e2b/1050/800/w/23047/-/1383178518.jpg'
    }
      
    else if (img_1.src==='https://asset1.zankyou.com/images/wervice-card-big/5e2/3e2b/1050/800/w/23047/-/1383178518.jpg'){
      img_1.src='https://i.pinimg.com/474x/12/a2/a1/12a2a113b43fc048a59d10a9b78baba9.jpg'
    }

    else if(img_1.src==='https://i.pinimg.com/474x/12/a2/a1/12a2a113b43fc048a59d10a9b78baba9.jpg'){
      img_1.src='https://www.dianamartinez.com.co/images/banner-01.jpg'  
  }
  img_1.style.width='700px'
  img_1.style.height='600px'
} 

  const anchorOnChange_2= ()=>{
    let img_2= document.getElementById('foto2')

    if (img_2.src==='https://www.dianamartinez.com.co/images/altacostura2010/alta-costura-06.jpg'){
      img_2.src= 'https://www.dianamartinez.com.co/images/ALTA%20COSTURA%202013/alta-costura14.jpg'
    }
    else if (img_2.src==='https://www.dianamartinez.com.co/images/ALTA%20COSTURA%202013/alta-costura14.jpg'){
      img_2.src= 'https://www.dianamartinez.com.co/images/ALTA%20COSTURA%202013/alta-costura04.jpg'
    }
    else if (img_2.src==='https://www.dianamartinez.com.co/images/ALTA%20COSTURA%202013/alta-costura04.jpg'){
      img_2.src='https://www.dianamartinez.com.co/images/altacostura2010/alta-costura-06.jpg'
    }
  }

  return (
    <div className='container' style={{width:'100%'}}>
          <h2 
          className='container_title'>
            Nuestros diseños
          </h2>

          <div className='vestidos_container'>
          
            <div className='denovia'>
              <h2> Vestidos de Novias </h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting.
              <br></br>
              <br></br>
              <a onClick={anchorOnChange_1} style={{fontSize:'19px', textDecorationLine:'underline', cursor:'pointer', color:'steelblue'}}> Ver mas vestidos </a>
              </p>
              <img 
                className='foto_vestidos' 
                id='foto1'
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
                <a onClick={anchorOnChange_2} style={{fontSize:'19px', textDecorationLine:'underline', cursor:'pointer', color:'steelblue'}}> Ver mas vestidos </a>  
              </p>
              <img 
                id='foto2'
                className='foto_vestidos' 
                src='https://www.dianamartinez.com.co/images/altacostura2010/alta-costura-06.jpg'
                alt='foto de vestido de novias'>
                </img>
            </div>          
        </div>

    </div>
  )
}

export default Shop
