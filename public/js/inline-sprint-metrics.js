app.renderSprintEstimateCount = function (sprintName, groupedEstimatesData) {
    let viewId = "sprint-summary[estimates]-view";
    let chartId = "sprint-summary[estimates]-container"
    let chartContainer = _a.$id("sprint-summary");

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    let barsData = _a.$data(groupedEstimatesData.values, "height");
    let labelData = _a.$data(groupedEstimatesData.keys, "height");

    // Add the visuals
    _a.container(viewId, _ => {
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40)]);
        _.hLine([_a.$y(200), _a.$x(5), _a.$width(200), _a.$appendCSS("axis")]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, -5, -3), _a.$width(30), _a.$xOffset(10)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, -5, 15), _a.$width(30), _a.$xOffset(10)]);

        _.label(`Sprint Summary: Estimates`, [_a.$appendCSS("title"), _a.$textSize(12, 20, TitleY)]);
        _.label(`Sprint ${sprintName}`, [_a.$appendCSS("legend"), _a.$textSize(12, 20, Legend + TitleMargin)]);
        _.label(`Complexity vs No. Stories`, [_a.$appendCSS("legend"), _a.$textSize(12, 20, Legend*2 + TitleMargin)]);
        _.label("No. Stories (by Complexity)", [_a.$appendCSS("legend"), _a.$alignBottom(225), _a.$textSize(12, 20, 15)]);

        _.onRenderCompleted(() => {
            resizeHorizontalAxis(_);
        });
    }, _a.$id(chartId));
}

app.renderSprintEstimateCycleTimes = function (sprintName, sprintMetrics) {
    let viewId = "sprint-summary[cycleTimes]-view";
    let chartId = "sprint-summary[cycleTimes]-container"
    let chartContainer = _a.$id("sprint-cycletime-summary");

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    let labelData = _a.$data(sprintMetrics.estimates, "height");
    let barsData = _a.$data(sprintMetrics.averageCycleTime, "height");

    // // Add the visuals
    _a.container(viewId, _ => {
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40)]);
        _.hLine([_a.$y(200), _a.$x(5), _a.$width(200), _a.$appendCSS("axis")]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, -5, -3), _a.$width(30), _a.$xOffset(10)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, -5, 15), _a.$width(30), _a.$xOffset(10)]);

        _.label(`Sprint Summary: Average Cycle Time`, [_a.$appendCSS("title"), _a.$textSize(12, 20, TitleY)]);
        _.label(`Sprint ${sprintName}`, [_a.$appendCSS("legend"),_a.$textSize(12, 20, Legend + TitleMargin)]);
        _.label(`Complexity vs Average Cycle Time`, [_a.$appendCSS("legend"),_a.$textSize(12, 20, Legend*2 + TitleMargin)]);
        _.label("Avg. Cycle Time (by Complexity)", [_a.$appendCSS("legend"),_a.$alignBottom(225), _a.$textSize(12, 20, 15)]);

        _.onRenderCompleted(() => {
            const container = _.getCurrentContainer()
            const boundingBox = _a.containerBoundingBox(_);
            const axis = _a.$class(container, "axis");

            axis[0].$attr("x2", boundingBox.width);
        });
    }, _a.$id(chartId));
}

app.renderSprintEstimateDetails = function (sprint) {
    let estimates = {}

    sprint.items.forEach(item => {
        if (!_u.$isTruthy(estimates[item.estimate])) {
            estimates[item.estimate] = []
        }

        estimates[item.estimate].push(item.cycleTime)
    });

    Object.keys(estimates).forEach(estimate => {
        const groupedData = groupValues(estimates[estimate]);
        const distributedData = mapToDistributedArray(groupedData.groupedValues, 1);
        const actualCycleTime = averageCycleTime(groupedData.keys, groupedData.groupedValues).toFixed(1)
        const cycleTime = Math.ceil(actualCycleTime)

        const chartData = {
            chartContainerId: "sprint-estimate-details",
            chartPrefix: "sprint-estimates",
            numberOfDifferentEstimates: groupedData.values.length,
            estimate: estimate,
            itemCount: estimates[estimate].length,
            actualCycleTime: actualCycleTime,
            cycleTime: cycleTime,
            distributedData: distributedData,
            chartTitle: `Cycle Time for Stories sized as ${estimate}`,
        }

        this.renderEstimateBarChartVisual(chartData);
    })
}

function extractSprintMetrics(selectedSprintData) {
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