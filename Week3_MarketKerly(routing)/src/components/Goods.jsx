import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Goods( props ) {
  const navigate = useNavigate();
  const onClickGoods = () => {
    navigate(`/goods/${props.name}`, {
      state: props
    })
  }
  
  
  return (
    <div className="goods_container" onClick={onClickGoods} style={{cursor: 'pointer'}}>
      <img src={props.img_path} alt="상품이미지" />
      <div className="goods_info">
        <h2>{props.name}</h2>
        <h3>Price : {props.price}krw</h3>
      </div>
    </div>
  )
}
