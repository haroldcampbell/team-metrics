function averageCycleTime(cycleTimes, occurrences) {
    let items = 0;

    let totalTime = cycleTimes.reduce((acc, cur) => {
        items += occurrences[cur]
        return acc + cur * occurrences[cur]
    }, 0);

    return totalTime / items
}


/**
 * Takes a array of values and returns an array of the number occurrence of values.

 * @function groupValues

 * @param {Array} values - The array of values to count
 * @return {Hash} Each key represent the number of times that item existed in @values
 *
 * @example
 *  let source = ["1", "1", "2", "2", "2", "2", "1", "1", "2", "1", "2", "2", "2", "1", "2", "2", "3", "3", "1", "1", "5", "2", "5", "2", "6", "2", "2"]
 *  groupedData = groupValues(source)
 *  // groupedData {
 *  //   grouping: {1: 8, 2: 14, 3: 2, 5: 2, 6: 1},
 *  //   keys: [1, 2, 3, 5, 6],
 *  //   values: [8, 14, 2, 2, 1]
 *  // }
 *  // 1 appeared x9
 *  // 2 appeared x15 times
 *  // etc.
 */
function groupValues(values) {
    let computed = {
        groupedValues: {}
    }

    values.forEach(item => {
        if (!_u.$isTruthy(computed.groupedValues[item])) {
            computed.groupedValues[item] = 0;
        }
        computed.groupedValues[item] += 1;
    })

    computed.values = [];
    computed.keys = Object.keys(computed.groupedValues).map(k => parseInt(k));
    computed.keys.forEach(k => {
        computed.values.push(computed.groupedValues[k]);
    })

    return computed;
}

function mapToDistributedArray(groupedValues, startFrom = 0) {
    function findMinMaxMapKeys(groupedValues) {
        let maxItem = Number.NEGATIVE_INFINITY;
        let minItem = Number.POSITIVE_INFINITY;

        for (let key in groupedValues) {
            key = parseInt(key);
            maxItem = key > maxItem ? key : maxItem;
            minItem = key < minItem ? key : minItem;
        }

        return [minItem, maxItem];
    }

    let computed = [];
    let [minItem, maxItem] = findMinMaxMapKeys(groupedValues);

    for (let index = startFrom; index < minItem; index++) {
        computed.push(0);
    }

    for (let index = minItem; index <= maxItem; index++) {
        if (!_u.$isTruthy(groupedValues[index])) {
            computed.push(0);
        } else {
            computed.push(groupedValues[index]);
        }
    }
    return computed
}