import React, { useEffect } from 'react'


const Card = ({data}) => {

   
  return (
    <div>
      <div className='w-[15rem] h-[15rem] bg-gray-200 rounded-lg p-3 m-6'>
        <div className='flex justify-center'>
        <img className='w-32 h-32' src={data.image}/>
        </div>
        <div className='flex justify-between py-2 font-bold'>
            <h1>{data.name}</h1>
            <p>{data.symbol}</p>
        </div>
        <h2>{Number(data.current_price/83.5).toFixed(2)} USD</h2>
      </div>
      
    </div>
  )
}

export default Card
