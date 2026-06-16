import React, { createContext } from 'react'
export const dataContext = createContext()
import { useState } from 'react'
import { food_items } from '../food'

function UserContext({children}) {
    let [Category,SetCategory] = useState(food_items)
    let [inputValue,SetInputValue] = useState('')
    let [showCart,SetShowCart] = useState(false)
    let data = {
        Category,
        SetCategory,
        inputValue,
        SetInputValue,
        showCart,
        SetShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}> 
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext