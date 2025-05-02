import React from 'react'


export const Rules = () => {
  return (
    <div className=' max-w-4xl mx-auto bg-red-100 flex flex-col gap-4 p-4 mt-24 mb-10'>
            <h1 className='text-2xl font-bold font-Poppins'>How to play dice game</h1>

            <div>
                <p className='text-[20px] font-light'>Select any number</p>
                <p className='text-[20px] font-light'>Click on dice image</p>
                <p className='text-[20px] font-light'>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p className='text-[20px] font-light'>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </div>
  )
}

export default Rules;