// initial state of the app
export const initialState = {
  basket: [],
};

// manipulates the state => dispatches the action into the datalayer
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
