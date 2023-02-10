import QueryString from 'qs';
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchPage() {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(queryData.sword);

  const sword = queryData.sword;
  
    return (
    <div className='title_wrap'>
        <h1 className="title">"{sword}"에 대한 검색결과</h1>
    </div>
  )
}
