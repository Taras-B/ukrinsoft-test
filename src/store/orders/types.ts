import { Action } from 'redux'

export enum EnumActionType {
  SET_LOADING = 'orders/SET_LOADING',
  ADD_TO_CART = 'orders/ADD_TO_CART',
  CONFIRM_TO_ORDERS = 'orders/SET_CONFIRM_TO_ORDERS',
}

export interface IOrder {
  id: string
  created: Date
  order: string[]
}
export interface IOrdersState {
  cart: string[]
  orders: IOrder[]
}

// Action type

export interface ISetAddToCartAction extends Action<EnumActionType> {
  type: EnumActionType.ADD_TO_CART
  payload: string
}

export interface ISetConfirmOrdersAction extends Action<EnumActionType> {
  type: EnumActionType.CONFIRM_TO_ORDERS
}

export type OrdersActionT = ISetAddToCartAction | ISetConfirmOrdersAction
