import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'
import {getApp} from './inline-app.js'

function isValidIntCell(row, name) {
    const cellValue = parseInt(row[name]);
    return [cellValue, Number.isInteger(cellValue)];
}

function calcDeliveredStoryPoints(estimates) {
    return estimates.reduce((acc, cur) => acc + cur);
}

function calcThroughput(estimates) {
    return estimates.length;
}

function calAverageCycleTime(cycleTimes) {
    let sum = cycleTimes.reduce((acc, cur) => acc + cur);
    let avg = sum / cycleTimes.length;

    return avg.toFixed(1)
}

export let _app = getApp()

_app.processData = function (worksheet) {
    let squadData = this.loadSprintData(worksheet);
    let aggregatedMetrics = this.processSquadAggregatedMetrics(squadData);

    squadData.sprintMetrics = aggregatedMetrics.sprintMetrics;
    squadData.averageCycleTimes = aggregatedMetrics.averageCycleTimes;
    squadData.actualVelocity = aggregatedMetrics.actualVelocity;
    squadData.actualThroughput = aggregatedMetrics.actualThroughput;
    squadData.estimates = this.loadEstimateData(worksheet);

    return squadData;
}

/** Cycle time is aggregated based on story effort estimates, independently of sprint */
_app.loadEstimateData = function (worksheet) {
    let estimates = {}

    worksheet.forEach(row => {
        const [estimate, isValidEstimate] = isValidIntCell(row, "Estimate");
        const [cycleTime, isValidCycleTime] = isValidIntCell(row, "Cycle time (days)");

        if (!isValidEstimate || !isValidCycleTime) {
            return;
        }

        if (!_u.$isTruthy(estimates[estimate])) {
            estimates[estimate] = []
        }
        estimates[estimate].push(cycleTime);
    });

    return estimates
}

_app.loadSprintData = function(worksheet) {
    let sprints = {};
    let sprintNames = [];

    worksheet.forEach((row, rowIndex) => {
        const [sprint, isValidSprint] = isValidIntCell(row, "Sprint");

        if (!isValidSprint){
            return;
        }

        if (!_u.$isTruthy(sprints[sprint])) {
            sprints[sprint] = {
                name: sprint,
                items: [],
                estimates: [],
                cycleTimes: [],
            };

            sprintNames.push(sprint);
        }

        let sprintItem = {
            rowIndex: rowIndex,
            estimate: parseInt(row["Estimate"]),
            cycleTime: parseInt(row["Cycle time (days)"]),
        };

        sprints[sprint].items.push(sprintItem);
        sprints[sprint].estimates.push(sprintItem.estimate);
        sprints[sprint].cycleTimes.push(sprintItem.cycleTime);
    });

    return {
        sprints: sprints,
        sprintNames: sprintNames
    };
}

_app.processSquadAggregatedMetrics = function (squadData) {
    let averageCycleTimes = [];
    let actualVelocity = [];
    let actualThroughput = [];
    let sprintMetrics = {};

    squadData.sprintNames.forEach(sprint => {
        let capacity = calcDeliveredStoryPoints(squadData.sprints[sprint].estimates);
        let throughput = calcThroughput(squadData.sprints[sprint].estimates);
        let avgCycleTime = calAverageCycleTime(squadData.sprints[sprint].cycleTimes);

        actualVelocity.push(capacity);
        actualThroughput.push(throughput);
        averageCycleTimes.push(avgCycleTime);

        sprintMetrics[sprint] = {
            name: sprint,
            capacity: capacity,
            throughput: throughput,
            avgCycleTime: avgCycleTime,
        };
    });

    return {
        sprintMetrics: sprintMetrics,
        averageCycleTimes: averageCycleTimes,
        actualVelocity: actualVelocity,
        actualThroughput: actualThroughput,
    }
}

// /** Cycle time is aggregated based on each Sprint */
// app.loadSprintCycleTimeData = function () {
//     let sprintCycleTimes = {};

//     metrics.worksheet.forEach(row => {
//         if (!_u.$isTruthy(sprintCycleTimes[row.Sprint])) {
//             sprintCycleTimes[row.Sprint] = [];
//         }
//         sprintCycleTimes[parseInt(row.Sprint)].push(parseInt(row["Cycle time (days)"]));
//     });

//     return sprintCycleTimes;
// }

// /** Estimates is aggregated based on each Sprint */
// app.loadSprintEstimatesData = function () {
//     let sprintEstimates = {};

//     metrics.worksheet.forEach(row => {
//         if (!_u.$isTruthy(sprintEstimates[row.Sprint])) {
//             sprintEstimates[row.Sprint] = [];
//         }
//         sprintEstimates[parseInt(row.Sprint)].push(parseInt(row["Estimate"]));
//     });

//     return sprintEstimates;
// }