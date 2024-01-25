import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import imageLogo from '../../assets/images/logo-login.png'

const SignInPage = () => {
  const [isShowPassword] = useState(false)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background:'#ccc',height: '100vh',}}>
      <div style={{width:'800px', height: '450px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
      <WrapperContainerLeft>
        <h1>Xinchao</h1>
        <p>Đăng nhập và tạo tài khoản </p>
        <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
        <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
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
            textbutton={"Đăng nhập"}
            styleTextButton={{ color: '#fff', fontSize:'15px', fontWeight:'700' }}>
          </ButtonComponent>
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight> Tạo tài khoản</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='Image-logo' height='203px' width='203px' />
          <h4 style={{color: '#fff', fontSize:'15px', fontWeight:'700'}}>Mua sắm tại ALIBARBE</h4>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignInPage