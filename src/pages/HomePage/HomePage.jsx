import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SlideComponent from '../../components/SliderComponent/SlideComponent'
import Slider1 from '../../assets/images/Slider1.jpg'
import Slider2 from '../../assets/images/Slider2.jpg'
import Slider3 from '../../assets/images/Slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr =['TV', 'Tu lanh','Laptop',]
  return (
    <>
      <div style={{ width: '1270px', margin:'0 auto'}}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item}/>   
        )
      })}
      </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '1000px', width: '83.6%', margin: '0 auto'}}>
          <SlideComponent arrImages={[Slider1, Slider2, Slider3]} />
          <WrapperProducts>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
          </WrapperProducts>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
            <WrapperButtonMore textbutton="Xem them" type="outline"
              styleButton={{
                border: '1px solid #ff6400', color: '#ff6400',
                width: '240px', height: '38px',
                borderRadius: '10px'}}
            styleTextButton={{ fontWeight: 500}}/>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default HomePage