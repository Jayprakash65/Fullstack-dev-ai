import dice from '../assets/dices.png'

const StartGame = ({toggle}) => {
  return (
    <>
        <div className='max-w-[1180px] mx-auto px-10 flex  flex-col justify-center items-center md:flex-row   gap-5 pt-20'>
            <div className=''><img className='w-100 md:w-200' src={dice} /></div>

            <div className='md:w-1/2'>
                <h1 className='text-7xl font-bold mb-7'>DICE GAME</h1>
                <div className=' flex justify-center'>
                    <button onClick={toggle} className='bg-black text-white px-12 py-3 text-xl hover:bg-gray-800'>Play Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default StartGame;