import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import './style.css'

const SignUpPage = () => {
  const [isShowPassword] = useState(false)

  return (
    <div className='SignUpPage'>
      <div style={{width:'800px', height: '450px', borderRadius: '6px', background: '#fff', display: 'flex',fontSize:'15px'}}>
      <WrapperContainerLeft>
        <h1>Chào mừng đến Alibarbe</h1>
        <p>Hãy tài khoản mới </p>
        <InputForm style={{marginBottom:'10px'}} placeholder="abc@gmail.com" />
        <div style={{ position: 'relative',marginBottom:'10px' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
                fontSize:'18px'
                
              }}
            >{
                isShowPassword ? (
                  <IoEyeOutline />
                ) : (
                  <IoEyeOffOutline />
                )
              }
            </span>
            <InputForm
              placeholder="password" type={isShowPassword ? "text" : "password"}/>
          </div>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
                fontSize:'18px'
              }}
            >{
                isShowPassword ? (
                  <IoEyeOutline />
                ) : (
                  <IoEyeOffOutline />
                )
              }
            </span>
            <InputForm
              placeholder="confirm password" type={isShowPassword ? "text" : "password"}/>
          </div>
        <ButtonComponent
            border= {false}
            size={40}
            styleButton={{
              background: 'linear-gradient(to right, #FF4B2B, #FF416C)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '15px', 
              margin: '26px 0px 10px'
            }}
            textbutton={"Đăng kí"}
            styleTextButton={{ color: '#fff', fontSize:'15px', fontWeight:'700' }}>
          </ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight> Đăng nhập </WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='Image-logo' height='203px' width='203px' />
          <h4 style={{color: '#fff', fontSize:'20px', fontWeight:'700'}}>Mua sắm tại ALIBARBE</h4>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignUpPage