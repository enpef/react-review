import { combineReducers } from 'redux'

function countPlus(state = 0, action){
    switch (action.type) {
        case 'PLUS':
            return state + 1
        default:
            return state
    }
}

function countMinus(state = 0, action){
    switch (action.type) {
        case 'MINUS':
            return state + 1
        default:
            return state
    }
}

function totalClick(state = 0, action){
    switch (action.type) {
        case 'MINUS':
            return state - 1
        case 'PLUS':
            return state + 1
        default:
            return state
    }
}

const reducers = combineReducers({
    plus: countPlus,
    minus: countMinus,
    totalclick: totalClick
})

export default reducers