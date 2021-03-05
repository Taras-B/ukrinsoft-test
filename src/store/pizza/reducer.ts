const GET_DATE = 'APP/DATE/GET_DATE'

const initialState = {
  data: {
    cap: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      sausage: 2,
      mushroom: 3,
      cheese: 1,
    },
    onions: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      meat: 1,
      cheese: 1,
    },
    king_one: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      mayo: 1,
      mushroom: 3,
      tomato: 2,
      cheese: 3,
      dill: 2,
      parsley: 2,
    },
    gavay: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      ananas: 1,
      cheese: 2,
    },
    tonno: {
      dough: 1,
      tomato_sauce: 1,
      tuna: 2,
      cappers: 1,
      cheese: 1,
    },
    vegetarian: {
      dough: 1,
      tomato_sauce: 1,
      tomato: 2,
      cappers: 1,
      cucumber: 2,
      onion: 2,
      cheese: 1,
    },
  },
}

export type PizzaStateType = typeof initialState

export const pizzaReducer = (state = initialState, action: any): PizzaStateType => {
  switch (action.type) {
    case GET_DATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
