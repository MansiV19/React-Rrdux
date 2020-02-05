export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        dispatchType: action.type,
        ...action.data
      }
    case 'DECREMENT':
      return {
        ...state,
        dispatchType: action.type,
        ...action.data
      }
          default:
      return state
  }
}