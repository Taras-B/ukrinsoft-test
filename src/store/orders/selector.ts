import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const ordersList = (state: RootState) => state.orders.orders
export const pizzaList = (state: RootState) => state.pizza.data

export const getInfoPizza = createSelector(ordersList, pizzaList, (order, listP) => {
  const orderedPizza = order.map((el) => [...el.order]).flat()

  const allIngredients: string[] = []

  const reducerCallback = (acc: any, el: any) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }

  const pizzas = orderedPizza.reduce(reducerCallback, {})

  const popular = Object.keys(pizzas).sort((a, b) => {
    return pizzas[b] - pizzas[a]
  })

  popular.splice(5, 1)

  Object.entries(listP).map((item) => {
    const ingredient = Object.keys(item[1])
    if (popular.includes(item[0])) {
      return allIngredients.push(...ingredient)
    } else {
      return item
    }
  })

  const pizzasIngredients = allIngredients.reduce(reducerCallback, {})

  const ingredients = Object.keys(pizzasIngredients).sort((a, b) => {
    return pizzasIngredients[b] - pizzasIngredients[a]
  })

  return { popular, ingredients }
})
