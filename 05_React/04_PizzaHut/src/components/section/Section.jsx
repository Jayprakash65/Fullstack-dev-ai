import React from 'react'
import Card from '../card/Card'

function Section({activeTab}) {


    const basicDetails={
      pizzas:{
        title:'Pizzas',
        discription:'Explore our great range of pizza recipes from the Pizza Hut pizza menu.',
        products:[
          {
            id: 1,
            imageSrc: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=251',
            title:'Momo Mia Pizza-Veg',
            discription:'Pizza with juicy Veg Momos placed on the crust and base topped with spicy Schezwan sauce, onions, capsicum, sweet corn, and 100% mozzarella cheese, baked to perfection!  (PAN Per/Med 241 Kcal/100g)'
          },
          {
            id: 2,
            imageSrc: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=251',
            title:'Tandoori Paneer',
            discription:"It's our signature. Spiced Paneer, Crunchy Onions & Green Capsicum, spicy Red Paprika with delicious Tandoori Sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g |TnC-326 Kcal/100g)"
          },
          {
              id: 3,
              imageSrc: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-onion-capsicum-pan-personal.dad788ecbd3fcc57366462827e31ee05.1.jpg?width=251',
              title:'Classic Onion Capsicum',
            discription:'Pizza topped with our classic pan sauce, crunchy onion & capsicum and a flavourful dressing. (307 Kcal/100g)'
          },
          {
              id: 4,
              imageSrc: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-corn-pan-personal.7c80196383b32e2ad5715646c1b12df8.1.png?width=251',
              title:'Classic Corn',
              discription:'Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite (319 Kcal/100g)'
          },
        ]
      },
      sides:{
        title:'Sides',
        discription:'Explore our great choice of delicious sides to complement your pizzas',
        products:[
          {
            id: 1,
            imageSrc: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.f947c28d2a08a955238dd425a783b01c.1.jpg?width=251',
            title:'Loaded Veggie BBQ',
            discription:'Thin & Crispy crust, loaded with Crunchy Onion, Green Capsicum, Red Bell Pepper, Juicy Corn, Mushroom, 100% mozzarella cheese, flavorful sauce, and a generous drizzle of signature barbeque sauce, folded over and baked, then brushed with herbed butter and sprinkled with our signature spice seasoning (255 Kcal/100g)'
          },
        ]
      },
      desserts:{
        title:'Desserts',
        discription:'Explore our tempting choice of delicious desserts. Available for delivery and collection.',
        products:[]
      },
      drinks:{
        title:'Drinks',
        discription:'Explore our great selection of refreshing drinks',
        products:[]
      },
      deals:{
        title:'Deals',
        discription:'Check out the latest meal deals available from Pizza Hut',
        products:[]
      }

    }

  return (
    <div className=' w-[1200px] mx-auto p-5'>
        <div className='font-semibold text-[32px] my-[32px] text-center'>Our {basicDetails[activeTab].title}</div>
        <div className='mb-[48px] text-center'>{basicDetails[activeTab].discription}</div>
        
        <div className='grid grid-cols-4 justify-items-center gap-y-16'>
            {
                basicDetails[activeTab].products.map((card) => <Card key={card.id} imgSrc={card.imageSrc} title={card.title} discription={card.discription}/>)
            }

        </div>
    </div>
  )
}

export default Section