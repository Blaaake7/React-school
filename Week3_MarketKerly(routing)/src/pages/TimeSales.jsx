import React from 'react'
import Goods from '../components/Goods';
import { dummy } from "../goodsDummy"

export default function TimeSales() {
  return (
    <div className="page_wrapper">
        <div className='title_wrap'>
            <h1 className="title">알뜰쇼핑</h1>
        </div>
        <div className="content_wrapper">
            {dummy.timeSales.map((item) => {
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

