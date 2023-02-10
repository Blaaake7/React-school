import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function GoodsDetail() {
  const { name } = useParams();
  const { state } = useLocation();
  
    return (
    <div className='page-container'>
        <div style={{display: "flex"}}>
            <img 
            style={{ width: "450px", height:"600px", borderRadius: "6px" }}
            src={state.img_path}
            alt='상품 이미지'
             />
            <div>
                
                <div style={{fontSize: "40px", margin: "20px 70px 0 70px", padding: "10px"}}>Name: {name}</div>
                <div style={{fontSize: "40px", margin: "0 70px", padding: "10px"}}>Id: {state.id}</div>
                <div style={{fontSize: "40px", margin: "0 70px", padding: "10px"}}>Price: {state.price}krw</div>
            </div>
        </div>
    </div>
  )
}
