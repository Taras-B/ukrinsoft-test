import { EnumActionType, ISetAddToCartAction, ISetConfirmOrdersAction } from './types'

export const actionsOrders = {
  addToCart: (payload: string): ISetAddToCartAction => ({
    type: EnumActionType.ADD_TO_CART,
    payload,
  }),
  confirmOrder: (): ISetConfirmOrdersAction => ({
    type: EnumActionType.CONFIRM_TO_ORDERS,
  }),
}
