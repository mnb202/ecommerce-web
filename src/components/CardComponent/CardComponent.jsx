import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { IoStar } from "react-icons/io5";
import logo from '../../assets/images/logo.png'; 

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width: '0px', height: '200px'}}
      style={{ width: 200 }}
      bodyStyle={{padding:'10px' }}
      cover={<img alt="example" src="https://i.pinimg.com/564x/10/07/ea/1007ea337d3a4ff36100990db7f2ba1d.jpg" />}>
      <img
        src={logo}
        alt="Hình ảnh sản phẩm"
        style={{
          width: '68px', height: '14px',
          position: 'absolute',
          top: -1, left: -1,
          borderTopLeftRadius: '6px' }} />
      <StyleNameProduct>MNB</StyleNameProduct>
      <WrapperReporText>
        <span style={{margin: '4px'}}>
          <span>202 </span> <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
         </span>
        <WrapperStyleTextSell> | Sold out 100000+</WrapperStyleTextSell>
      </WrapperReporText>
      <WrapperPriceText >
        <span style={{marginRight:'8px'}}>1.000.000.000VND</span>
        <WrapperDiscountText>
          -10%
        </WrapperDiscountText>
      </WrapperPriceText>

    </WrapperCardStyle>
    )
}

export default CardComponent