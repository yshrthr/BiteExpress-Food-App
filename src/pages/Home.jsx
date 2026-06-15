import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'

function Home() {
  return (
    <div className='w-[100%] min-h-screen bg-red-50'>
        <Nav />
        <div className='w-full flex flex-wrap justify-center items-center gap-4 w-[100%]'>
          {Categories.map((item) =>   {
            return <div className='w-[120px] h-[130px] bg-white flex flex-col item-start gap-2 p-5 justify-start text-[17px] text-grey-600 font-semibold rounded-md shadow-xl hover:bg-green-200 cursor-pointer transition-all'>
              {item.icon}
              {item.name}
            </div>
          })}
        </div>
    </div>
  )
}

export default Home