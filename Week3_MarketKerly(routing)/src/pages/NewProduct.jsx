import React from 'react'
import Goods from '../components/Goods';
import { dummy } from "../goodsDummy"

export default function NewProduct() {
  return (
    <div className="page_wrapper">
        <div className='title_wrap'>
            <h1 className="title">신상품</h1>
        </div>
        <div className="content_wrapper">
            {dummy.newProduct.map((item) => {
                return (
                    <Goods
                    id={item.id}
                    img_path={item.img_path}
                    name={item.name}
                    price={item.price}
                    />
                );
            })}
        </div>
    </div>
  )
}
