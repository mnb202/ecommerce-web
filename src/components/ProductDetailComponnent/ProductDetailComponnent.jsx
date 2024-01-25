import { Row, Col, Image, } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.jpg'
import imageProductSmall from '../../assets/images/imagesmall.jpg'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { IoStar,IoAddOutline,IoRemoveOutline} from "react-icons/io5";
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponnent = () => {
  const onChange = () => {  }
  return (
    <Row style={{padding:'16px', background:'#fff', borderRadius:'4px'}}>
      <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight:'8px'}}>
        <Image src={imageProduct} alt='image product' preview={false} />
        <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
          <WrapperStyleColImage span={4} >
            <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt='image small' preview={false}/>
          </WrapperStyleColImage>
          
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>Son Kem Lì Pink Coco Mềm Mịn Môi Không Dính Cốc Không Dễ Phai</WrapperStyleNameProduct>
        <div>
          <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
          <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
          <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
          <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
          <IoStar style={{ fontSize: "10px", color: '#FFC125' }} />
          <WrapperStyleTextSell> | Sold out 100000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>260.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến:</span>
          <span className='address'>Q.1, Bến Nghé, Hồ Chí Minh</span>
          <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{margin:'10px 0 20px',padding:'10ps 0', borderTop:'1px solid #e5e5e5e5', borderBottom:'1px solid #e5e5e5e5'}}>
          <div style={{marginBottom: '10px'}}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{border:'none', background: 'transparent'}}>
            
              <IoRemoveOutline style={{ color: '#000', fontSize: '20px' }} />
            </button>
            <WrapperInputNumber min={0} defaultValue={3} onChange={onChange} size="small" />
            <button style={{border:'none', background: 'transparent'}}>
              <IoAddOutline style={{ color: '#000', fontSize: '20px' }}/>
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{display:'flex', alignItems:'center', gap: '12px'}}>
          <ButtonComponent
            border= {false}
            size={40}
            styleButton={{
              background: "#ff6400",
              height: '48px',
              width: '220px',
              border: 'none',
              borderRadius: '4px'
            }}
            textbutton={"Chon mua"}
            styleTextButton={{ color: '#fff', fontSize:'15px', fontWeight:'700' }}>
          </ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: '48px',
              width: '220px',
              border: '1px solid #FFC125 ',
              borderRadius: '4px'
            }}
            textbutton={"Mua tra sau"}
            styleTextButton={{ color: '#FFC125', fontSize:'15px', fontWeight:'700' }}>
          </ButtonComponent>
        </div>
      </Col>
      </Row>
    )
}

export default ProductDetailComponnent