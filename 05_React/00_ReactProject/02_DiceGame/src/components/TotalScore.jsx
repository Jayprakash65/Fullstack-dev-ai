import React from 'react'

const TotalScore = ({score , setScore}) => {
  return (
    
        <div className='leading-8 text-center'>
            <h1 className='font-bold text-8xl'>{score}</h1>
            <p className='text-2xl'>Total Score</p>
            
        </div>
      
    
  )
}

export default TotalScore