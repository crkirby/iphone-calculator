const { createStore } = require('redux')
const { reducer } = require('./reducers')

export default createStore(reducer)
