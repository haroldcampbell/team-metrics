import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'

export const TitleY = 20;
export const TitleMargin = 30;
export const Legend = 20
// const
export function averageCycleTime(cycleTimes, occurrences) {
    let items = 0;

    let totalTime = cycleTimes.reduce((acc, cur) => {
        items += occurrences[cur]
        return acc + cur * occurrences[cur]
    }, 0);

    return totalTime / items
}


/**
 * Takes an array of values and returns an array of the number occurrence of values.

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
export function groupValues(values) {
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

export function mapToDistributedArray(groupedValues, startFrom = 0) {
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

export function resizeHorizontalAxis(visual) {
    const container = visual.getCurrentContainer()
    const boundingBox = _a.containerBoundingBox(visual);
    const axis = _a.$class(container, "axis");

    axis[0].$attr("x2", boundingBox.width + boundingBox.x);
}

export function extractSprintMetrics(selectedSprintData) {
    let estimateCycleTimes = {};

    selectedSprintData.items.forEach(item => {
        if (!_u.$isTruthy(estimateCycleTimes[item.estimate])) {
            estimateCycleTimes[item.estimate] = {
                count: 0,
                totalCycleTime: 0,
                averageCycleTime: 0,
            };
        }
        estimateCycleTimes[item.estimate].count += 1;
        estimateCycleTimes[item.estimate].totalCycleTime += item.cycleTime;
    })

    let estimates = Object.keys(estimateCycleTimes);
    let averageCycleTime = estimates.map(estimate => {
        return estimateCycleTimes[estimate].averageCycleTime = (estimateCycleTimes[estimate].totalCycleTime / estimateCycleTimes[estimate].count).toFixed(1);
    });

    return {
        estimates: estimates,
        averageCycleTime: averageCycleTime,
    }
}