export function parseDataAsPerGroup (data, groupByKey) { // status, userId, priority
    var parsedData = {};
    parsedData.groupByKey = groupByKey;
    
    // logic to segregate by groupby , todo, done, pending
    var uniqueGroupByKeys = new Set();
    console.log('pdata', data);
    
    for (let i = 0; i < data.length; i++) {
        uniqueGroupByKeys.add(data[i][groupByKey]);        
    }
    // console.log(uniqueGroupByKeys);
    
    var helperData = {};
    uniqueGroupByKeys.forEach((item) => {
        helperData[item] = [];

        for (let i = 0; i < data.tickets.length; i++) {
            const ticket = data.tickets[i];
            if (ticket[groupByKey] === item) {
                helperData[item].push(ticket);
            }
            
        }
    
    });

    parsedData.data = helperData;

    return parsedData;
}


// fetch data from https://api.quicksell.co/v1/internal/frontend-assignmen
export const getData = (groupByKeyword) => {
    return (dispatch) => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then(response => response.json())
            .then(data => {
                const parseddata = parseDataAsPerGroup(data.tickets, groupByKeyword);
                data.groupByKeyword = groupByKeyword;
                // data.data = parseddata.data;
                console.log('dddd', data);
                console.log('parseddata', parseddata);
                dispatch({ type: 'GET_API_DATA', payload: data })
            })
    }
}