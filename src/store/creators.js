import types from './types'

export default {
  add: () => ({ type: types.ADD }),

  buildOperand: operand => ({ type: types.BUILD_OPERAND, operand }),
  
  clear: () => ({ type: types.CLEAR }),
  
  divide: () => ({ type: types.DIVIDE }),
  
  flipSign: () => ({ type: types.FLIP_SIGN }),

  multiply: () => ({ type: types.MULTIPLY }),

  percent: () => ({ type: types.PERCENT }),

  solve: () => ({ type: types.SOLVE }),

  subtract: () => ({ type: types.SUBTRACT }) 
}
