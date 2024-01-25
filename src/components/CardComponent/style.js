import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height:200px;
        width: 200px; 
    }
    position: relative;
`

export const StyleNameProduct = styled.div`
    font-weight:400px;
    font-size:12px;
    line-height: 16px;
    color: #111111
`

export const WrapperReporText = styled.div`
    font-size: 11px;
    color: #111111;
    display: flex;
    align-items: center;
    margin: 6px 0 0px;

`
export const WrapperPriceText = styled.div`
    color: red;
    font-size: 16px;
    font-weight: 500px;

`

export const WrapperDiscountText = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 500px;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height:24px;
    color: #999999
`