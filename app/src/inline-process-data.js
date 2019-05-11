app.processData = function () {
    let squadData = {};

    let cycleTimesData = this.loadSprintCycleTimeData();
    let estimatesData = this.loadSprintEstimatesData()
    let sprintData = this.processSprintData(cycleTimesData, estimatesData)

    squadData.sprintNames = sprintData.sprintNames;
    squadData.sprintData = sprintData.sprintData;

    let aggregatedMetrics = this.processSquadAggregatedMetrics(sprintData.sprintData);
    squadData.aggregatedMetrics = aggregatedMetrics;

    let estimates = this.loadEstimateData()
    squadData.aggregatedMetrics.estimates = estimates;

    return squadData;
}

app.processSprintData = function (sprintCycleTimes, estimatesData) {
    let sprintData = {};
    let sprintNames = [];

    Object.keys(sprintCycleTimes).forEach(sprint => {
        sprint = parseInt(sprint);

        sprintNames.push(sprint);

        sprintData[sprint] = {
            sprint: sprint,
            cycleTimes: sprintCycleTimes[sprint],
            estimates: estimatesData[sprint],
            groupedData: groupValues(sprintCycleTimes[sprint])
        };
    });

    return {
        sprintNames: sprintNames,
        sprintData: sprintData,
    }
}

app.processSquadAggregatedMetrics = function (squadData) {
    let averageCycleTimes = [];
    let actualVelocity = [];
    let actualThroughput = [];
    let sprintMetrics = [];

    Object.keys(squadData).forEach(sprint => {
        sprint = parseInt(sprint);

        let capacity = calcDeliveredStoryPoints(squadData[sprint].estimates);
        let throughput = calcThroughput(squadData[sprint].estimates);
        let avgCycleTime = calAverageCycleTime(squadData[sprint].cycleTimes);

        actualVelocity.push(capacity);
        actualThroughput.push(throughput);
        averageCycleTimes.push(avgCycleTime);

        sprintMetrics.push({
            sprint: sprint,
            capacity: capacity,
            throughput: throughput,
            avgCycleTime: avgCycleTime,
        });
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

/** Cycle time is aggregated based on each Sprint */
app.loadSprintCycleTimeData = function () {
    let sprintCycleTimes = {};

    metrics.worksheet.forEach(row => {
        if (!_u.$isTruthy(sprintCycleTimes[row.Sprint])) {
            sprintCycleTimes[row.Sprint] = [];
        }
        sprintCycleTimes[parseInt(row.Sprint)].push(parseInt(row["Cycle time (days)"]));
    });

    return sprintCycleTimes;
}

/** Estimates is aggregated based on each Sprint */
app.loadSprintEstimatesData = function () {
    let sprintEstimates = {};

    metrics.worksheet.forEach(row => {
        if (!_u.$isTruthy(sprintEstimates[row.Sprint])) {
            sprintEstimates[row.Sprint] = [];
        }
        sprintEstimates[parseInt(row.Sprint)].push(parseInt(row["Estimate"]));
    });

    return sprintEstimates;
}