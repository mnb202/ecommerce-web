import React from 'react';
import { Badge, Col } from 'antd';
import {WrapperHeader, WrapperTextHeader, WrapperAccountHeader,WrapperTextHeaderSmall} from './style';
import { UserOutlined, CaretDownOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
function Header() {
  return (
    <div style={{heiht: '100%', width: '100%', display: 'flex', justifyContent: 'center'}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>ALIBARBER</WrapperTextHeader>
        </Col>

        <Col span={13}>
          <ButtonInputSearch 
              size= 'large' 
              bordered ={false}
              textButton ='Search'
              placeholder='Search is here'
              allowClear/>
        </Col>

        <Col span={6} style={{display:'flex', gap:'54px', alignItems: 'center'}}>
          <WrapperAccountHeader>
            <UserOutlined style={{ fontSize:'40px'}} />
            <div>
              <WrapperTextHeaderSmall>Sign In / Sign Up </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccountHeader>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: '40px', color:'#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default Header