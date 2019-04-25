const { ADD, BUILD_OPERAND, CLEAR, DIVIDE, MULTIPLY, SOLVE, SUBTRACT } = require('./types')

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: ADD }),
    buildOperand: operand => dispatch({ type: BUILD_OPERAND, operand }),
    clear: () => dispatch({ type: CLEAR }),
    divide: () => dispatch({ type: DIVIDE }),
    multiply: () => dispatch({ type: MULTIPLY }),
    solve: () => dispatch({ type: SOLVE }),
    subtract: () => dispatch({ type: SUBTRACT })
  }
}

export default mapDispatchToProps