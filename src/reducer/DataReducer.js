import { createReducer } from "@reduxjs/toolkit";
const initialDataState = {
    loading: null,
    allTickets: [],
    allUser: [],
    icons: {
        status: {
            "Backlog": "fa fa-exclamation-circle",
            "Todo": "fa fa-circle-thin",
            "In progress": "fa fa-spinner",
            "Done": "fa fa-check-circle",
            "Cancelled": "fa fa-times-circle"
        },
        priority: {
            "No priority": "fa fa-angle-double-down",
            "Low": "fa fa-angle-down",
            "Medium": "fa fa-bars",
            "High": "fa fa-angle-up",
            "Urgent": "fa fa-angle-double-up"
        },
        user: {
            online: "fa fa-user-circle",
            offline: "fa fa-user-circle-o"
        }
    }
}
export const DataReducer = createReducer(initialDataState, {
    DATA_REQUEST : (state) => {
        state.loading = true;
    },
    DATA_SUCCESS : (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    DATA_FAILURE : (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});

const initialSelectDataState = {
    loading: null,
    selectedData: [],
    group: null,
    user: {},
}
export const SelectDataReducer = createReducer(initialSelectDataState, {
    SELECT_DATA_REQUEST : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    SELECT_DATA_SUCCESS : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user;
        state.group = action.payload.group;
    },
    SELECT_DATA_FAILURE : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});