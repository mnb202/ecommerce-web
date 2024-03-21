import React from 'react'
import './style.css'
import { Col } from 'antd'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SlideComponent'
import Slider1 from '../../assets/images/Slider1.jpg'
import Slider2 from '../../assets/images/Slider2.jpg'
import Slider3 from '../../assets/images/Slider3.png'
import CardComponent from '../../components/CardComponent/CardComponent'
import MenuComponent from '../../components/MenuComponent/MenuComponent'
import NotificationComponent from '../../components/NotificationComponent/NotificationComponent'
import CountdownComponent from '../../components/CountdownComponent/CountdownComponent'
import SaleCardComponent from '../../components/SaleCardComponent/SaleCardComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

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
        <div id="container" style={{ height: 'auto', width: '83.6%', margin: '0 auto', paddingTop:'10px' }}>
          <div className='Nav-Slide'>
            <Col span={5}>
              <MenuComponent></MenuComponent>
            </Col>
            <Col span={14}>
              <div className='container-banner'>
                <SliderComponent arrImages={[Slider1, Slider2, Slider3]} />
              </div>
            </Col>
            <Col span={5}>
              <NotificationComponent></NotificationComponent>
            </Col>
          </div>
          <div className='Deal-Sale'>
            <Col span={5} className='Deal-Sale-Times'>
            <CountdownComponent></CountdownComponent>
            </Col>
            <Col span={19} className='Deal-Sale-Items'>
            <SaleCardComponent></SaleCardComponent>
            <SaleCardComponent></SaleCardComponent>
            <SaleCardComponent></SaleCardComponent>
            <SaleCardComponent></SaleCardComponent>
            <SaleCardComponent></SaleCardComponent>
            </Col>
          </div>

          <h2 className='Recommended'>Recommended items</h2>
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
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop:'20px'}}>
            <WrapperButtonMore textbutton="Xem them" type="outline"
              styleButton={{
                border: '1px solid #ff6400', color: '#ff6400',
                width: '240px', height: '38px',
                borderRadius: '10px', marginBottom: '20px',}}
            styleTextButton={{ fontWeight: 500}}/>
          </div>
        </div>
      </div>
      <FooterComponent/>
      
    </>
    
  )
}

export default HomePage