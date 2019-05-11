app.renderEstimatesForStories = function (sprintData) {
    const estimates = sprintData.aggregatedMetrics.estimates
    for (estimate in estimates) {
        this.renderEstimateBarChartVisual(_a, estimates, estimate);
    }
}

app.renderEstimateBarChartVisual = function (_a, estimates, estimate) {
    let itemCount = estimates[estimate].length;

    // Prep the data related to each estimate
    groupedData = groupValues(estimates[estimate]);

    distributedData = mapToDistributedArray(groupedData.groupedValues, 1);
    let barsData = _a.$data(distributedData, "height");
    let labelData = _a.$data(distributedData, "height");

    let cycleTime = Math.ceil(averageCycleTime(groupedData.keys, groupedData.groupedValues))
    let cycleTimeData = barsData.rawData().map(d => 0)
    cycleTimeData[cycleTime - 1] = cycleTime
    cycleTimeData = _a.$data(cycleTimeData, "height");

    // Grab the parent container
    let chartContainer = _a.$id("estimate-metrics");
    let chartId = `estimates-${estimate}-container`;
    let viewId = `estimates-${estimate}-view`;

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Average cycle time
        _.bars(cycleTimeData, [_a.$x(20), _a.$appendCSS("bar-cycle-time"), _a.$width(20), _a.$xIncrement(40), _a.$maxHeight(80), _a.$alignBottom(200), ]);
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$width(30), _a.$xIncrement(40), _a.$maxHeight(50), _a.$alignBottom(200)]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$width(30), _a.$xOffset(10), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, 0, -3)]);
        _.labels(labelData, [_a.$x(20), _a.$dataIndex(1), _a.$width(30), _a.$xOffset(10), _a.$alignBottom(200), _a.$textSize(12, 0, 15), ]);

        _.label(`Effort for Stories sized as ${estimate} (across all sprints)`, [_a.$appendCSS("title"), _a.$textSize(12, 20, 20)]);
        _.label(`${itemCount} Items`, [_a.$textSize(12, 20, 40)]);
        _.label(`${groupedData.values.length} Different Cycle Time(s)`, [_a.$textSize(12, 20, 55)]);
        _.label(`Average Cycle Time: ${cycleTime}`, [_a.$textSize(12, 20, 70)]);

        _.label("cycle time", [_a.$alignBottom(225), _a.$textSize(12, 20, 15)]);
    }, _a.$id(chartId));
}

// app.renderSequenceChartVisual = function (_a, estimates, groupedData) {
//     let barsData = _a.$data(groupedData.values, "height");
//     let labelData = _a.$data(groupedData.keys, "height");

//     let cycleTime = Math.ceil(averageCycleTime(groupedData.keys, groupedData.groupedValues))
//     let cycleTimeData = groupedData.values.map(d => 0)
//     // let cycleTimeData = barsData.rawData().map(d => 0)
//     // console.log(cycleTime, cycleTimeData)
//     // cycleTimeData[cycleTime - 1] = cycleTime
//     // cycleTimeData = _a.$data(cycleTimeData, "height");

//     // Add a container element
//     let viewId = `metrics-${estimate}`;
//     let chartId = `chart-${viewId}`;
//     let chartContainer = _a.$id("estimate-metrics");
//     _a.$htmlNode("div", chartContainer)
//         .$id(viewId)
//         .$class("container")

//     // Add the visual
//     _a.container(chartId, _ => {
//         _.bars(cycleTimeData, [_a.$group("c6-b2"), _a.$maxHeight(80), _a.$alignBottom(200), _a.$width(30), _a.$xOffset(10), ]);
//         // _.labels(cycleTimeData, [_a.$rawDataValue(), _a.$maxHeight(80), _a.$alignBottom(160), _a.$textSize(12, 10, -3), _a.$xOffset(45), _a.$width(30)]);

//         _.bars(barsData, [_a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xOffset(10), ]);
//         _.labels(barsData, [_a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, 10, -3), _a.$width(30), _a.$xOffset(10)]);
//         _.labels(labelData, [_a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, 10, 15), _a.$xOffset(45), _a.$width(30)]);

//         _.label(barsData, `Effort for Stories sized as ${estimate} (across all sprints)`, [_a.$textSize(12, 10, 15)]);
//         _.label(barsData, `${estimates[estimate].length} Items`, [_a.$textSize(12, 10, 40)]);
//         _.label(labelData, `${groupedData.values.length} Different Cycle Time(s)`, [_a.$textSize(12, 10, 55)]);
//         _.label(labelData, `Average Cycle Time: ${cycleTime}`, [_a.$textSize(12, 10, 70)]);

//         _.label(barsData, "cycle time", [_a.$alignBottom(225), _a.$textSize(12, 10, 15)]);
//     }, _a.$id(viewId));
// }