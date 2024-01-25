import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import styled from 'styled-components';

const ButtonInputSearch = (props) => {
  const {
    size, placeholder, textButton,
    bordered = 'none', backgroundColorInput = '#fff',
    backgroundColorButton = '#ff6400',
    colorButton ='#fff'
    } = props
  return (
    <div style={{display: 'flex',}}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{background:backgroundColorInput}}/>
      
      <ButtonComponent
        size={size}
        styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff', alignItems:'center', justifyContent: 'center'}} />}
        textbutton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  )
}

export default ButtonInputSearch
