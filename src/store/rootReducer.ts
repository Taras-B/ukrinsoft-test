import { combineReducers } from 'redux'
import { pizzaReducer, PizzaStateType } from './pizza/reducer'

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
})

export type RootState = {
  pizza: PizzaStateType
}
