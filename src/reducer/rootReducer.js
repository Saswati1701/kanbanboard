// const redux = require('redux');
// const combineReducers = redux.combineReducers;

const initialState = {
    sortByKeyword: 'title',
    groupByKeyword: 'status',
    groupByData: {},
    tickets: [],
    users: [],
    icons: {
        status: {
            todo: "fa fa-circle-o",
            inprogress: "fa fa-circle",
            backlog: "fa fa-circle-o",
            done: "fa fa-check-circle",
            pending: "fa fa-circle-o"
        },
        priority: {
            0: "fa fa-angle-double-down",
            1: "fa fa-angle-down",
            2: "fa fa-bars",
            3: "fa fa-angle-up",
            4: "fa fa-angle-double-up"
        },
        usersId: {
            online: "fa fa-user-circle",
            offline: "fa fa-user-circle-o"
        }
    }
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