const { ADD, BUILD_OPERAND, CLEAR, DIVIDE, FLIP_SIGN, MULTIPLY, PERCENT, SOLVE, SUBTRACT } = require('./types')

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: ADD }),
    buildOperand: operand => dispatch({ type: BUILD_OPERAND, operand }),
    clear: () => dispatch({ type: CLEAR }),
    divide: () => dispatch({ type: DIVIDE }),
    flipSign: () => dispatch({ type: FLIP_SIGN }),
    multiply: () => dispatch({ type: MULTIPLY }),
    percent: () => dispatch({ type: PERCENT }),
    solve: () => dispatch({ type: SOLVE }),
    subtract: () => dispatch({ type: SUBTRACT })
  }
}

export default mapDispatchToProps