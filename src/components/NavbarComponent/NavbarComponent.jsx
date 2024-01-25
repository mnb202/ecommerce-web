import React from 'react'
import { WapperContent, WapperLabelText, WapperTextPrice, WapperTextValue } from './style'
import {Checkbox, Rate,} from 'antd'
const NavbarComponent = () => {
  const onChange = () =>{ }
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
            return (
            <WapperTextValue>{option}</WapperTextValue>
            )
        })
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap:'12px'}} onChange={onChange}>
            {options.map((options) => {
              return (
                <Checkbox style={{marginLeft: 0,}} value={options.value}>{options.label}</Checkbox>
                
              )
            })}
          </Checkbox.Group>
        )
      case 'start':
        return options.map((option) => {
             console.log('check', option)
          return (
            <div style={{ display: 'flex', gap:'4px'}}>
                <Rate style={{ fontSize: '12px'}} disabled defaultValue={option} />
              <span>{ `Tu ${option} sao`}</span>
            </div>
              )
        })
        case 'price':
          return options.map((option) => {
            return (
              <WapperTextPrice> {option}</WapperTextPrice>
                )
              })
      default:
        return{}
    }
  }
  return (
    <div>
      <WapperLabelText>Lable</WapperLabelText>
      <WapperContent>
        {renderContent('text', ['Tu lanh', 'TV', 'May giat'])}
      </WapperContent>
      
    </div>
   
  )
}

export default NavbarComponent