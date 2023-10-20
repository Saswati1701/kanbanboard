import axios from 'axios';

export const fetchAllData = () => async (dispatch) =>{
    try {
        dispatch({type : 'DATA_REQUEST'})
    
        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment ");

        dispatch({type : 'DATA_SUCCESS', payload : data});

    } catch (error) {
        dispatch({type : 'DATA_FAILURE'})
    }
}

export const selectData = (group, allTickets, orderValue) => async (dispatch) =>{
    try {
        dispatch({type : 'SELECT_DATA_REQUEST'})

        let user = false;
        let mySet = new Set();
        let arr = [], selectedData = [];
        let icons = {
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

        if(group === 'status'){
            allTickets.forEach((elem) => {
                mySet.add(elem.status);
            })
    
            arr = [...mySet];
    
            arr.forEach((elem, index) => {
                let arr = allTickets.filter((fElem) => {
                    return elem === fElem.status;
                })
                selectedData.push({
                    [index] : {
                        title : elem,
                        value : arr
                    }
                })
            })
        }else if(group === 'user'){
            user = true;
            allTickets?.allUser?.forEach((elem, index) => {
                arr = allTickets?.allTickets?.filter((Felem) => {
                    return elem.id === Felem.userId;
                })

                selectedData.push({
                    [index] : {
                        title : elem.name,
                        value : arr
                    }
                })
            })
        }else{
            let priority_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            priority_list.forEach((e, index) => {
                arr = allTickets.filter((ele) => {
                    return index === ele.priority;
                })

                selectedData.push({
                    [index] : {
                        title : e,
                        value : arr
                    }
                })
            })
        }

        if(orderValue === "title"){
            selectedData.forEach((e, index) => {
                e[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        if(orderValue === "priority"){
            selectedData.forEach((e, index) => {
                e[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        
        dispatch({type : 'SELECT_DATA_SUCCESS', payload : {selectedData, user}});

    } catch (error) {
        dispatch({type : 'SELECT_DATA_FAILURE', payload : error.message})
    }
}
