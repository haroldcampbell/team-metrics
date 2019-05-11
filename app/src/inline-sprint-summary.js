app.renderSprintSummary = function (sprintData) {
    let barsData = _a.$data(sprintData.aggregatedMetrics.averageCycleTimes, "height");
    let labelData = _a.$data(sprintData.sprintNames, "height");

    // let sprint = 0
    // let sprintName = sprintData.sprintNames[sprint]
    // console.log(sprintData.sprintData[sprintName])
    this.renderSprintSummaryLineChartVisual(barsData, labelData);
}

app.renderSprintSummaryLineChartVisual = function (barsData, labelData) {
    // Grab the parent container
    let chartContainer = _a.$id("sprint-summary-metrics");
    let chartId = "sprint-summary-container"
    let viewId = "sprint-summary-view";

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40)]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, -5, -3), _a.$width(30), _a.$xOffset(10)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, -5, 15), _a.$width(30), _a.$xOffset(10)]);

        _.label(`Sprint Summary (Avg. Cycle Time/Story)`, [_a.$appendCSS("title"), _a.$textSize(12, 0, 20)]);

        // _.label("Sprints", [_a.$alignBottom(225), _a.$textSize(12, 20, 15)]);
    }, _a.$id(chartId));
}

