// const redux = require('redux');
// const combineReducers = redux.combineReducers;

const initialState = {
    sortByKeyword: 'title',
    groupByKeyword: 'status',
    groupByData: {},
    tickets: [],
    users: []

}



const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_API_DATA':
            return {
                ...state,
                tickets: action.payload.tickets,
                users: action.payload.users,
                groupByKeyword: action.payload.groupByKeyword,
                groupByData: action.payload.groupByData
            }

        case 'CHANGE_ORDERBY_DATA':
            return {
                ...state,
                groupByKeyword: action.payload.groupByKey,
                groupByData: action.payload.data
            }

        case 'SET_GROUPBY_KEYWORD':
            return {
                ...state,
                groupByKeyword: action.payload
            }

        case 'SET_SORTBY_KEYWORD':
            return {
                ...state,
                groupByKeyword: action.payload
            }

        default:
            return state;
    }
}

export default jobReducer;