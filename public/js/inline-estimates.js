import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'
import {
    TitleY,
    Legend,
    TitleMargin,
    groupValues,
    mapToDistributedArray,
    averageCycleTime,
    resizeHorizontalAxis
} from './inline-common.js'
import {
    getApp
} from './inline-app.js'

export let _app = getApp()

_app.renderEstimatesForStories = function (sprintData) {
    const estimates = sprintData.estimates
    for (let estimate in estimates) {
        const groupedData = groupValues(estimates[estimate]);
        const distributedData = mapToDistributedArray(groupedData.groupedValues, 1);
        const actualCycleTime = averageCycleTime(groupedData.keys, groupedData.groupedValues).toFixed(1)
        const cycleTime = Math.ceil(actualCycleTime)

        const chartData = {
            chartContainerId: "estimate-metrics",
            chartPrefix: "estimates",
            numberOfDifferentEstimates: groupedData.values.length,
            estimate: estimate,
            itemCount: estimates[estimate].length,
            actualCycleTime: actualCycleTime,
            cycleTime: cycleTime,
            distributedData: distributedData,
            chartTitle: `Effort for Stories sized as ${estimate} (across all sprints)`,
        }
        this.renderEstimateBarChartVisual(chartData);
    }
}

_app.renderEstimateBarChartVisual = function (chartData) {
    // Prep the data related to each estimate
    let barsData = _a.$data(chartData.distributedData, "height");
    let labelData = _a.$data(chartData.distributedData, "height");

    let cycleTimeData = barsData.rawData().map(d => 0)
    cycleTimeData[chartData.cycleTime - 1] = chartData.cycleTime
    cycleTimeData = _a.$data(cycleTimeData, "height");

    // Grab the parent container
    let chartContainer = _a.$id(chartData.chartContainerId);
    let chartId = `${chartData.chartPrefix}-${chartData.estimate}-container`;
    let viewId = `${chartData.chartPrefix}-${chartData.estimate}-view`;

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container widget");

    // Add the visuals
    _a.container(viewId, _ => {
        // Average cycle time
        // _.bars(cycleTimeData, [_a.$x(25), _a.$width(30),  _a.$xIncrement(40), _a.$maxHeight(80), _a.$alignBottom(200), _a.$appendCSS("bar-cycle-time")]);
        _.bars(cycleTimeData, [_a.$x(25), _a.$width(20), _a.$xIncrement(40), _a.$maxHeight(80), _a.$alignBottom(200), _a.$appendCSS("bar-cycle-time")]);
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(25), _a.$width(30), _a.$xIncrement(40), _a.$maxHeight(50), _a.$alignBottom(200)]);
        _.hLine([_a.$y(200), _a.$x(5), _a.$width(200), _a.$appendCSS("axis")]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$width(30), _a.$xOffset(10), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, 0, -3)]);
        _.labels(labelData, [_a.$x(20), _a.$dataIndex(1), _a.$width(30), _a.$xOffset(10), _a.$alignBottom(200), _a.$textSize(12, 0, 15), ]);

        _.label(chartData.chartTitle, [_a.$appendCSS("title"), _a.$textSize(12, 20, TitleY)]);
        _.label(`${chartData.itemCount} Items`, [_a.$appendCSS("legend"), _a.$textSize(12, 20, Legend + TitleMargin)]);
        _.label(`${chartData.numberOfDifferentEstimates} Different Cycle Time(s)`, [_a.$appendCSS("legend"), _a.$textSize(12, 20, Legend * 2 + TitleMargin)]);
        _.label(`Avg. Cycle Time: ${chartData.cycleTime} (actual ${chartData.actualCycleTime})`, [_a.$appendCSS("legend"), _a.$textSize(12, 20, Legend * 3 + TitleMargin)]);

        _.label("cycle time", [_a.$appendCSS("legend"), _a.$alignBottom(225), _a.$textSize(12, 20, 15)]);
        _.onRenderCompleted(() => {
            const container = _.getCurrentContainer()
            const boundingBox = _a.containerBoundingBox(_);

            container.$attr("width", boundingBox.width + Math.abs(boundingBox.x) + 25);
            container.$attr("height", boundingBox.height + Math.abs(boundingBox.x));

            resizeHorizontalAxis(_);
        });
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