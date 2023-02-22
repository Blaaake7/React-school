import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Goods from '../components/Goods';
import { dummy } from "../goodsDummy"



export default function NewProduct() {
  const url = 'http://localhost:4000/newProduct';
  const [result, setResult] = useState();
  const [tmpResult, setTmpResult] = useState();
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    try {
        axios.get(url)
        .then(response => {
            console.log(response.data);
            setTmpResult(response.data);
            setResult(response.data.filter((data, i) => i < 3));
        })
    } catch (err) {
        alert(err);
    }
  }, []);

  const onClickMore = () => {
    setResult(tmpResult.filter((data, i) => i < 6));
    setShowMore(false);
  }
  
    return (
    <div className="page_wrapper">
        <div className='title_wrap'>
            <h1 className="title">신상품</h1>
        </div>
        <div className="content_wrapper">
            {result && result.map((item) => {
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
        <div className="show__wrapper">
            {showMore ? <button onClick={onClickMore} className="show__btn">더보기</button> : null}
        </div>
    </div>
  )
}

