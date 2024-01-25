import { Col, Image, InputNumber } from "antd";
import styled from "styled-components"

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
    
`

export const WrapperStyleColImage = styled(Col)`
    flex-basics: unset;
    display:flex;
`

export const WrapperStyleNameProduct = styled.h1`
    color: #444444;
    font-size: 24px;
    font-height: 300;
    line-height: 32px;
    word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height:24px;
    color: #999999
`

export const WrapperPriceProduct = styled.div`
    background: #F8F8FF;
    boder-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height:40px;
    margin-right: 8px;
    font-weight: 500
    color: #999999;
    padding: 10px
`
export const WrapperAddressProduct = styled.div`
    span.address{
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl
    },
    span.change-address{
        color: #F4A460;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        flex-shrink: 0;
    }
`

export const WrapperQualityProduct = styled.div`
    display:flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px
`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{
        width: 100px;
        border-top: none;
        border-bottom: none;
        $.ant-input-number-handler-wrap{
            display: none;
        }
    }
    
`