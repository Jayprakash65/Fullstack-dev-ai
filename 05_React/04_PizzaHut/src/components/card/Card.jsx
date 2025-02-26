import React from 'react'

function Card({imgSrc, title, discription}) {
  return (
    <div className='w-[260px] border'>
        <div className='mb-5'>
            <img className='w-[260px]' src={imgSrc}/>
        </div>
        <div className='p-2'>
            <h2 className='text-[18px] font-medium mb-2'>{title}</h2>
            <p className='mb-5'>{discription}</p>
        
        </div>

        <div className=' flex justify-center mb-4'>
            <button className='px-[80px] py-[10px] bg-red-100 rounded-2xl'>View More</button>
        </div>
    </div>
  )
}

export default Card