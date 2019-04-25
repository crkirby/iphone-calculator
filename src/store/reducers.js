const { ADD, BUILD_OPERAND, CLEAR, DIVIDE, MULTIPLY, SOLVE, SUBTRACT } = require('./types')
const defaultState = { currentResult: 0, operandOne: '', operandTwo: '', operation: undefined }

export function reducer(state = defaultState, { type, operand }) {
  let expressionExists = (state.operandOne !== defaultState.operandOne && 
    state.operandTwo !== defaultState.operandTwo && state.operation !== undefined)

  switch (type) {
    case CLEAR: return defaultState
    case BUILD_OPERAND:
      return !state.operation ?
        { ...state, operandOne: state.operandOne.concat(operand), currentResult: state.operandOne.concat(operand) }
        :
        { ...state, operandTwo: state.operandTwo.concat(operand), currentResult: state.operandTwo.concat(operand) }

    case ADD:
      if(expressionExists){
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

    case SOLVE:
      return { ...state, currentResult: state.operation(state.operandOne, state.operandTwo).toString() }

    default: return state
  }
}

const add = (a, b) => parseFloat(a) + parseFloat(b)
const divide = (a, b) => parseFloat(a) / parseFloat(b)
const multiply = (a, b) => parseFloat(a) * parseFloat(b)
const subtract = (a, b) => parseFloat(a) - parseFloat(b)
