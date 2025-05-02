import React from 'react'
import { useState } from 'react';

import dice1 from '../assets/dice_1.png';
import dice2 from '../assets/dice_2.png';
import dice3 from '../assets/dice_3.png';
import dice4 from '../assets/dice_4.png';
import dice5 from '../assets/dice_5.png';
import dice6 from '../assets/dice_6.png';

import Rules from './Rules';

const diceImages = [dice1, dice2, dice3, dice4, dice5 ,dice6];

const RollDice = ({currentDice, rollDice, resetValue}) => {

    const [showRule, setShowRule] = useState(false);

  return (

    <>
        <div className='max-w-3xs mx-auto mt-18 border p-2'>
            <div onClick={rollDice}>
                <img src={diceImages[currentDice - 1]} />
                <p className='text-center text-xl font-semibold'>Click on Dice to roll</p>
            </div>

            <div className='flex flex-col mt-6 items-center gap-3'>
                <button onClick={resetValue} className='max-w-56 border px-5 py-2.5 w-full hover:bg-gray-700 hover:text-white'>Reset Score</button>
 
                <button onClick={() => setShowRule((prev) => !prev)} className='max-w-56 border px-5 py-2.5 w-full bg-black text-white '>{showRule?"Hide":"Show"} Rules</button>
            </div>

            

        </div>

        {showRule && <Rules />}
    
    </>
        
    
  )
}

export default RollDice