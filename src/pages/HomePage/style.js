import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    justify-content: flex-start;
    height: 40px;
    font-size: large;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: #ff6400;
        span {
            color: #fff;
        }
    }
    width:100%;
    text-align: center
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`