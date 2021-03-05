import { combineReducers } from 'redux'
import { ordersReducer } from './orders/reducer'
import { IOrdersState } from './orders/types'
import { pizzaReducer, PizzaStateType } from './pizza/reducer'

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
  orders: ordersReducer,
})

export type RootState = {
  pizza: PizzaStateType
  orders: IOrdersState
}
