import React from 'react'
import { useState } from 'react';

const NumberSelector = ({slectedNumber,setSlectedNumber, error, setError}) => {

    const arrNumber = [1,2,3,4,5,6]

    

  return (
    <div className='flex flex-col gap-6 pt-15'>
        <p className='text-red-400 text-xl'>{error}</p>
        <div className='flex gap-3'>
            {
                arrNumber.map((value, index) => {
                return <div 
                key={index} 
                className={`w-[72px] h-[72px] border font-Poppins font-semibold flex justify-center items-center text-2xl
                    ${slectedNumber === value ? 'bg-black text-white' : null}
                    
                `}

                onClick={() => {
                    setSlectedNumber(value)
                    setError("")
                }}
                
                >{value} </div>

                

                })
            }
        </div>

        <p className='text-xl font-semibold text-end '>Select Number</p>
        

    </div>
  )
}

export default NumberSelector;