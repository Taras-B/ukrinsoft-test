import React from 'react'
import { useSelector } from 'react-redux'
import { PizzaStateType } from '../../store/pizza/reducer'
import { RootState } from '../../store/rootReducer'

export const PizzaList = () => {
  const pizzas: { [index: string]: any } = useSelector(
    (state: RootState) => state.pizza.data
  )
  const keysPizzas = Object.keys(pizzas)
  console.log(keysPizzas.map((el) => pizzas[el]))

  return (
    <div>
      {keysPizzas.map((el) => (
        <div key={el}>
          <h4>{el}</h4>
          <hr />
          {Object.entries(pizzas[el]).map((item) => (
            <div key={item[0]}>
              {item[0]}: {item[1]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
