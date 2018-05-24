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

const initialState = {isRejected: true, data: null}
function ReposDetail(state = initialState, action){
    switch (action.type) {
        case 'LOAD_REPOS_PENDING':
            return {
                isRejected: false,
                data: null
            }
        case 'LOAD_REPOS_FULFILLED':
        console.log("passs")
            return {
                isRejected: false,
                data: action.payload
            }
        case 'LOAD_REPOS_REJECTED':
            return {
                isRejected: true,
                data: null
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    plus: countPlus,
    minus: countMinus,
    totalclick: totalClick,
    ReposDetail
})

export default reducers