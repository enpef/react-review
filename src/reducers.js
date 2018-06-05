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
                data: null,
                img: "http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
            }
        case 'LOAD_REPOS_FULFILLED':
        // console.log(action.payload)
            return {
                isRejected: false,
                data: action.payload,
                star: action.payload.stargazers_count,
                Languages: action.payload.language,
                fork: action.payload.forks,
                img: action.payload.organization.avatar_url

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