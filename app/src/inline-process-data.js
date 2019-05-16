app.processData = function () {
    let squadData = this.loadSprintData();
    let aggregatedMetrics = this.processSquadAggregatedMetrics(squadData);

    squadData.sprintMetrics = aggregatedMetrics.sprintMetrics;
    squadData.averageCycleTimes = aggregatedMetrics.averageCycleTimes;
    squadData.actualVelocity = aggregatedMetrics.actualVelocity;
    squadData.actualThroughput = aggregatedMetrics.actualThroughput;
    squadData.estimates = this.loadEstimateData();

    return squadData;
}

/** Cycle time is aggregated based on story effort estimates, independently of sprint */
app.loadEstimateData = function () {
    let estimates = {}

    metrics.worksheet.forEach(row => {
        if (!_u.$isTruthy(estimates[row.Estimate])) {
            estimates[row.Estimate] = []
        }
        estimates[parseInt(row.Estimate)].push(parseInt(row["Cycle time (days)"]))
    });

    return estimates
}

app.loadSprintData = function() {
    let sprints = {};
    let sprintNames = [];

    metrics.worksheet.forEach(row => {
        if (!_u.$isTruthy(sprints[row.Sprint])) {
            sprints[row.Sprint] = {
                name: row.Sprint,
                items: [],
                estimates: [],
                cycleTimes: [],
            };

            sprintNames.push(row.Sprint);
        }

        let sprintItem = {
            estimate: parseInt(row["Estimate"]),
            cycleTime: parseInt(row["Cycle time (days)"]),
        };

        sprints[row.Sprint].items.push(sprintItem);
        sprints[row.Sprint].estimates.push(sprintItem.estimate);
        sprints[row.Sprint].cycleTimes.push(sprintItem.cycleTime);
    });

    return {
        sprints: sprints,
        sprintNames: sprintNames
    };
}

app.processSquadAggregatedMetrics = function (squadData) {
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