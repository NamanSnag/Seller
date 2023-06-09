import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Product from '../../components/product/Product';

import './style.scss';

const View = () => {
  const sellerId = useSelector(state => state.user.id);
  const url = `/api/seller/${sellerId}`;
  const res = useFetch(url);
  const data = res.data.data;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data?.filter(
    item => item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <>
      <div className='marginTop'></div>
      <div className='view'>
        <div className='view__search'>
          <input type='search' placeholder='Search Product' value={searchTerm} onChange={handleSearch} />
        </div>

        <div className='view__list'>
          {filteredData &&
            filteredData.map((data, i) => (
              <Product key={data.id} data={data} />
            ))}
        </div>
      </div>
    </>
  );
};

export default View;

