import actionCreators from './creators'

export default dispatch => {
  return {
    add: () => dispatch(actionCreators.add()),
    buildOperand: operand => dispatch(actionCreators.buildOperand(operand)),
    clear: () => dispatch(actionCreators.clear()),
    divide: () => dispatch(actionCreators.divide()),
    flipSign: () => dispatch(actionCreators.flipSign()),
    multiply: () => dispatch(actionCreators.multiply()),
    percent: () => dispatch(actionCreators.percent()),
    solve: () => dispatch(actionCreators.solve()),
    subtract: () => dispatch(actionCreators.subtract())
  }
}
