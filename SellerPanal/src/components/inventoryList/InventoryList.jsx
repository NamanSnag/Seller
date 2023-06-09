import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'

import './style.scss'
import Product from '../product/Product';

const InventoryList = () => {
  const sellerId = useSelector(state=> state.user.id);
  let url = `/api/seller/${sellerId}`;
  const res = useFetch(url);
  url = "https://sellerbynaman.onrender.com"+url;
  const data = res.data.data;
  const handleCopy = () => {
    alert('URL copied to clipboard!');
  };

  return (
    <div className='inventoryList'>
      <div className='unique__URL'>
        <CopyToClipboard text={url} onCopy={handleCopy}>
          <button className='copyBtn'>Copy URL For Inventory Refral For Buyers</button>
        </CopyToClipboard>
      </div>

      <div className='list__container'>
        {
          data && data.map((data, i) => (
            <Product index={data.id} data={data} />
          ))
        }
      </div>
    </div>
  )
}

export default InventoryList
