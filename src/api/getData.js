export function parseDataAsPerGroup (data, groupByKey) { // status, userId, priority
    var parsedData = {};
    parsedData.groupByKey = groupByKey;

    // logic to segregate by groupby , todo, done, pending
    var uniqueGroupByKeys = new Set();
    data.tickets.forEach((item) => {
        uniqueGroupByKeys.add(item[groupByKey]);
    });
    // console.log(uniqueGroupByKeys);

    var helperData = {};
    uniqueGroupByKeys.forEach((item) => {
        helperData[item] = [];
        data.tickets.forEach((ticket) => {
            if (ticket[groupByKey] === item) {
                helperData[item].push(ticket);
            }
        });
    
    });

    parsedData.data = helperData;

    return parsedData;
}