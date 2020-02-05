export const Add = ({value = 0}= {}) => (dispatch) => {
dispatch({
  type:'INCREMENT',
  data: {
    value: value + 1,
  }
})
}

export const Sub = ({value = 0}= {}) => (dispatch) => {
  dispatch({
    type:'DECREMENT',
    data: {
      value: value - 1,
    }
  })
  }