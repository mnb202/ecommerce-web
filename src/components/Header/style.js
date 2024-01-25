import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
	background: linear-gradient(to right, #FF4B2B, #FF416C);
    color: #fff;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 100%;
    padding: 25px 120px;
`

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    font-weight:bold;
    text-align: left;
`

export const WrapperAccountHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 20px;
    text-align: center;
    gap: 10px
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
