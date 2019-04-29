import types from './types'

const DEFAULT_STATE = { currentResult: 0, operandOne: '', operandTwo: '', operation: undefined }

export default (state = DEFAULT_STATE, { type, operand }) => {
  const expressionExists = (state.operandOne !== DEFAULT_STATE.operandOne &&
    state.operandTwo !== DEFAULT_STATE.operandTwo && state.operation !== undefined)

  switch (type) {
    case types.CLEAR: return DEFAULT_STATE
    case types.BUILD_OPERAND:
      try {
        return !state.operation ?
          { ...state, operandOne: state.operandOne.concat(operand), currentResult: state.operandOne.concat(operand) }
          :
          { ...state, operandTwo: state.operandTwo.concat(operand), currentResult: state.operandTwo.concat(operand) }
      } catch (e) { return { ...state } }

    case types.ADD:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo)
        return { currentResult, operandOne: currentResult, operandTwo: DEFAULT_STATE.operandTwo, operation: add }
      }
      return { ...state, operation: add }

    case types.DIVIDE:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo)
        return { currentResult, operandOne: currentResult, operandTwo: DEFAULT_STATE.operandTwo, operation: divide }
      }
      return { ...state, operation: divide }

    case types.MULTIPLY:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo)
        return { currentResult, operandOne: currentResult, operandTwo: DEFAULT_STATE.operandTwo, operation: multiply }
      }
      return { ...state, operation: multiply }

    case types.SUBTRACT:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo)
        return { currentResult, operandOne: currentResult, operandTwo: DEFAULT_STATE.operandTwo, operation: subtract }
      }
      return { ...state, operation: subtract }

    case types.PERCENT:
      return expressionExists ?
        { ...state, currentResult: percentify(state.currentResult), operandTwo: percentify(state.operandTwo) }
        :
        { ...state, currentResult: percentify(state.currentResult), operandOne: percentify(state.currentResult) }

    case types.FLIP_SIGN:
      return expressionExists ?
        { ...state, currentResult: negate(state.currentResult), operandTwo: negate(state.operandTwo) }
        :
        { ...state, currentResult: negate(state.currentResult), operandOne: negate(state.operandOne) }

    case types.SOLVE:
      try {
        const currentResult = state.operation(state.operandOne, state.operandTwo)
        return { ...DEFAULT_STATE, currentResult, operandOne: currentResult }
      } catch (e) { return { ...state } }

    default: return state
  }
}

const add = (a, b) => parseFloat(a) + parseFloat(b)
const divide = (a, b) => parseFloat(a) / parseFloat(b)
const multiply = (a, b) => parseFloat(a) * parseFloat(b)
const subtract = (a, b) => parseFloat(a) - parseFloat(b)
const negate = (x) => parseFloat(x) * -1
const percentify = (x) => parseFloat(x) / 100.0
