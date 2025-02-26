import React from 'react'
import { useState } from 'react';

function Nav({activeTab, setActiveTab}) {


  return (
    <div className='my-5 flex bg-green-200 border-1 w-[1200px] mx-auto '>
        <div className={`w-[20%] text-center py-3 border-r-1 cursor-pointer  ${activeTab === 'pizzas' ? 'bg-red-300': null}`} onClick={() => setActiveTab('pizzas')}>Pizzas</div>
        <div className={`w-[20%] text-center py-3 border-r-1 cursor-pointer ${activeTab === 'sides' ? 'bg-red-300': null}`} onClick={() => setActiveTab('sides')}>Sides</div>
        <div className={`w-[20%] text-center py-3 border-r-1 cursor-pointer ${activeTab === 'desserts' ? 'bg-red-300': null}`} onClick={() => setActiveTab('desserts')}>Desserts</div>
        <div className={`w-[20%] text-center py-3 border-r-1 cursor-pointer ${activeTab === 'drinks' ? 'bg-red-300': null}`} onClick={() => setActiveTab('drinks')}>Drinks</div>
        <div className={`w-[20%] text-center py-3 border-r-1 cursor-pointer ${activeTab === 'deals' ? 'bg-red-300': null}`} onClick={() => setActiveTab('deals')}>Deals</div>
    </div>
  )
}

export default Nav