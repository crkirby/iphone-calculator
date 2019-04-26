const { ADD, BUILD_OPERAND, CLEAR, DIVIDE, FLIP_SIGN, MULTIPLY, PERCENT, SOLVE, SUBTRACT } = require('./types')
const defaultState = { currentResult: 0, operandOne: '', operandTwo: '', operation: undefined }

export function reducer(state = defaultState, { type, operand }) {
  const expressionExists = (state.operandOne !== defaultState.operandOne &&
    state.operandTwo !== defaultState.operandTwo && state.operation !== undefined)

  switch (type) {
    case CLEAR: return defaultState
    case BUILD_OPERAND:
      return !state.operation ?
        { ...state, operandOne: state.operandOne.concat(operand), currentResult: state.operandOne.concat(operand) }
        :
        { ...state, operandTwo: state.operandTwo.concat(operand), currentResult: state.operandTwo.concat(operand) }

    case ADD:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo).toString()
        return { currentResult, operandOne: currentResult, operandTwo: defaultState.operandTwo, operation: add }
      }
      return { ...state, operation: add }

    case DIVIDE:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo).toString()
        return { currentResult, operandOne: currentResult, operandTwo: defaultState.operandTwo, operation: divide }
      }
      return { ...state, operation: divide }

    case MULTIPLY:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo).toString()
        return { currentResult, operandOne: currentResult, operandTwo: defaultState.operandTwo, operation: multiply }
      }
      return { ...state, operation: multiply }

    case SUBTRACT:
      if (expressionExists) {
        const currentResult = state.operation(state.operandOne, state.operandTwo).toString()
        return { currentResult, operandOne: currentResult, operandTwo: defaultState.operandTwo, operation: subtract }
      }
      return { ...state, operation: subtract }
    // getting 0.0001 presented instead of 0.000currentResult -- but currentResult is 0.000currentResult -- hm?
    case PERCENT:
      return expressionExists ?
        { ...state, currentResult: percentify(state.currentResult), operandTwo: percentify(state.operandTwo) }
        :
        { ...state, currentResult: percentify(state.currentResult), operandOne: percentify(state.currentResult) }

    case FLIP_SIGN:
      return expressionExists ?
        { ...state, currentResult: negate(state.currentResult), operandTwo: negate(state.operandTwo) }
        :
        { ...state, currentResult: negate(state.currentResult), operandOne: negate(state.operandOne) }

    case SOLVE:
      const currentResult = state.operation(state.operandOne, state.operandTwo).toString()
      return { ...defaultState, currentResult, operandOne: currentResult }

    default: return state
  }
}

const add = (a, b) => parseFloat(a) + parseFloat(b)
const divide = (a, b) => parseFloat(a) / parseFloat(b)
const multiply = (a, b) => parseFloat(a) * parseFloat(b)
const subtract = (a, b) => parseFloat(a) - parseFloat(b)
const negate = (x) => parseFloat(x) * -1
const percentify = (x) => parseFloat(x) / 100.0
