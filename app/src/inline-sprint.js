app.renderSprintCycleTime = function (sprintData) {
    // Grab the parent container
    let chartContainer = _a.$id("sprint-metrics");

    let labelData = _a.$data(sprintData.sprintNames, "height");
    // let barsData = _a.$data(sprintData.aggregatedMetrics.averageCycleTimes, "height");
    // this.renderSprintCycleTimeVisual(chartContainer, labelData, barsData);

    // console.log("[renderSprintCycleTime]", sprintData)
    // console.log(sprintData.sprintData[sprintName])

    let velocityData = _a.$data(sprintData.aggregatedMetrics.actualVelocity, "y");
    this.renderVelocityVisual(chartContainer, labelData, velocityData);
}

app.renderVelocityVisual = function (chartContainer, labelData, velocityData) {
    let chartId = "velocity-container";
    let viewId = "velocity-view";

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Velocity
        // _.ellipses(velocityData, [_a.$cx(20), _a.$maxY(50), _a.$diameter(50), _a.$cxIncrement(30), _a.$alignCYBottom(200)]);
        // _.bars(velocityData, [_a.$x(20), _a.$y(50), _a.$width(5), _a.$xIncrement(30), _a.$maxHeight(50), _a.$alignBottom(200), _a.$appendCSS("red")]);
        // _.bars(velocityData, [_a.$x(20), _a.$y(50), _a.$width(10), _a.$xIncrement(30), _a.$maxHeight(55), _a.$alignBottom(200), _a.$appendCSS("blue")]);
        // _.bars(velocityData, [_a.$x(20), _a.$y(50), _a.$width(15), _a.$xIncrement(30), _a.$maxHeight(60), _a.$alignBottom(200), _a.$appendCSS("green")]);
        // _.bars(velocityData, [_a.$x(20), _a.$y(50), _a.$width(20), _a.$xIncrement(30), _a.$maxHeight(65), _a.$alignBottom(200), _a.$appendCSS("yellow")]);

        _.ellipses(velocityData, [_a.$cx(20), _a.$maxY(50), _a.$diameter(5), _a.$cxIncrement(30), _a.$alignCYBottom(200)]);
        _.lines(velocityData, [_a.$x(20), _a.$xIncrement(30), _a.$width(30), _a.$maxHeight(50), _a.$alignBottom(200)]);

        // Velocity & Sprint Label
        _.labels(velocityData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, -5, -10), _a.$width(5), _a.$xIncrement(30)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, -5, 15), _a.$width(5), _a.$xIncrement(30)]);
        _.label(`Team Velocity`, [_a.$appendCSS("title"), _a.$textSize(12, 0, 20)]);

    }, _a.$id(chartId));
}

app.renderSprintCycleTimeVisual = function (chartContainer, labelData, barsData) {
    let chartId = "sprint-ct-container";
    let viewId = "sprint-ct-view";

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40)]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, 5, -3), _a.$width(30), _a.$xOffset(10)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, 10, 15), _a.$width(30), _a.$xOffset(10)]);

        _.label(`Cycle Time per Sprints`, [_a.$appendCSS("title"), _a.$textSize(12, 10, 20)]);

        _.label("Sprints", [_a.$alignBottom(225), _a.$textSize(12, 20, 15)]);
    }, _a.$id(chartId));
}