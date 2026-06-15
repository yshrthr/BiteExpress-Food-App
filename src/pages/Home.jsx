import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { useState } from 'react'

function Home() {

  let [Category,SetCategory] = useState(food_items)

  function filterCategory(category) {
    if(category === 'All') {
      SetCategory(food_items)
    }
    else{
      let newCategory = food_items.filter((item) => item.food_category === category)
      SetCategory(newCategory)
    }
  }

  return (
    <div className='w-[100%] min-h-screen bg-red-50'>
        <Nav />
        <div className='w-full flex flex-wrap justify-center items-center gap-4 w-[100%]'>
          {Categories.map((item) =>   {
            return <div className='w-[120px] h-[130px] bg-white flex flex-col items-start gap-2 p-5 justify-start text-[17px] text-gray-600 font-semibold rounded-md shadow-xl hover:bg-green-200 cursor-pointer transition-all' onClick={() => filterCategory(item.name)}>
              {item.icon}
              {item.name}
            </div>
          })}
        </div>
        <div className='w-full flex flex-wrap justify-center items-center gap-4 w-[100%] mt-10'>
          {Category.map((item)=> {
            return <Card names={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
          })}
        </div>
    </div>
  )
}

export default Home