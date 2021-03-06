import { EnumActionType, IOrdersState, OrdersActionT } from './types'

const initialState: IOrdersState = {
  cart: [],
  orders: [],
}

export const ordersReducer = (
  state = initialState,
  action: OrdersActionT
): IOrdersState => {
  switch (action.type) {
    case EnumActionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case EnumActionType.CONFIRM_TO_ORDERS:
      if (state.cart.length > 0) {
        let newOrder = {
          id: Math.random().toString(36).substr(2, 9),
          created: new Date(),
          order: [...state.cart],
        }
        return {
          ...state,
          cart: [],
          orders: [...state.orders, newOrder],
        }
      } else {
        return state
      }

    default:
      return state
  }
}
