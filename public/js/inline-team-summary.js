import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'
import {
    TitleY,
    Legend,
    TitleMargin,
    groupValues,
    extractSprintMetrics
} from './inline-common.js'

import {
    getApp
} from './inline-app.js'

import {getGrid} from './grid.js'

const _grid = getGrid();
export let _app = getApp();

_app.renderTeamSummary = function (sprintData) {
    let barsData = _a.$data(sprintData.averageCycleTimes, "height");
    let labelData = _a.$data(sprintData.sprintNames, "height");

    this.renderTeamSummaryLineChartVisual(sprintData, barsData, labelData);
}

_app.renderTeamSummaryLineChartVisual = function (sprintData, barsData, labelData) {
    // Grab the parent container
    let chartContainer = _a.$id("team-summary-metrics");
    let chartId = "team-summary-container"
    let viewId = "team-summary-view";

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Number of stories with a specific cycle time
        _.bars(barsData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40), _a.$appendCSS("bar-cycle-time")]);
        _.hLine([_a.$y(200), _a.$x(5), _a.$width(200), _a.$appendCSS("axis")]);

        _.labels(barsData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$textSize(12, -5, -3), _a.$width(30), _a.$xOffset(10)]);
        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$textSize(12, -5, 15), _a.$width(30), _a.$xOffset(10)]);

        _.label(`Team Metric: Avg. Cycle Time/Story`, [_a.$appendCSS("title"), _a.$textSize(12, 20, TitleY)]);
        _.label("Sprints", [_a.$appendCSS("legend"), _a.$alignBottom(225), _a.$textSize(12, 20, Legend + TitleMargin)]);

        _.onRenderCompleted(() => {
            const barsElements = _a.$id(viewId).getElementsByTagName("rect");
            this.wireEvents(sprintData, barsElements);
        });
    }, _a.$id(chartId));

    this.renderSelectedSprintData(sprintData, sprintData.sprintNames.length - 1);
}

_app.wireEvents = function (sprintData, barsElements) {
    for (let index = 0; index < barsElements.length; index++) {
        const item = barsElements[index];
        item.onclick = (e) => {

            let sprintName = sprintData.sprintNames[index];
            let sprint = sprintData.sprints[sprintName];

            _grid.showRows(sprint.items.map(item => item.rowIndex));
            this.renderSelectedSprintData(sprintData, index);
        }
    }
}

_app.renderSelectedSprintData = function (sprintData, index) {
    _a.removeChildNodes("sprint-summary");
    _a.removeChildNodes("sprint-cycletime-summary")
    _a.removeChildNodes("sprint-estimate-details")

    let sprintName = sprintData.sprintNames[index];
    let sprint = sprintData.sprints[sprintName];

    const groupedEstimatesData = groupValues(sprint.estimates);
    const sprintMetrics = extractSprintMetrics(sprint);

    this.renderSprintEstimateCount(sprintName, groupedEstimatesData);
    this.renderSprintEstimateCycleTimes(sprintName, sprintMetrics);
    this.renderSprintEstimateDetails(sprint)
}