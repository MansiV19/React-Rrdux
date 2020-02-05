import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

function Counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
