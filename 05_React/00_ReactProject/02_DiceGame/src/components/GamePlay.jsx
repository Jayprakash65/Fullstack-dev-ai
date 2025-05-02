import React from 'react'
import {useState} from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import StartGame from './StartGame';


const GamePlay = () => {

  const [score, setScore] = useState(0)
  const [slectedNumber, setSlectedNumber] = useState(null);
  const  [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  

  const generateRandomNumber = (min , max) =>{
    return Math.floor(Math.random() * (max-min) + min);
} 

const rollDice = () =>{

    if (slectedNumber === null) {
      setError("You have not selected any number");

      return;
    };

    

    const randomNumber = generateRandomNumber(1,7);
    console.log(randomNumber);
    setCurrentDice(() => randomNumber)

    setSlectedNumber(undefined);

    if(slectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev - 0)
    }

}

const resetValue = () =>{
  setScore(0)
}


const toggle = () => {

}



  return (
    <main className='max-w-[2400px] mx-auto px-10'>
        <div className='flex flex-col md:flex-row gap-12 justify-between items-center'>
            <TotalScore score={score} setScore={setScore}  />
            <NumberSelector slectedNumber = {slectedNumber} setSlectedNumber = {setSlectedNumber} error={error} setError={setError} />
        </div>

        <RollDice currentDice={currentDice} rollDice= {rollDice} resetValue ={resetValue} />
        
        

    </main>
  )
}

export default GamePlay;