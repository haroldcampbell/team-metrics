import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'
import {TitleY} from './inline-common.js'
import {getApp} from './inline-app.js'

export let _app = getApp()

_app.renderTeamVelocity = function (sprintData) {
    // Grab the parent container
    let chartContainer = _a.$id("sprint-metrics");
    let labelData = _a.$data(sprintData.sprintNames, "height");
    let velocityData = _a.$data(sprintData.actualVelocity, "y");
    let throughputData = _a.$data(sprintData.actualThroughput, "y");

    this.renderVelocityVisual(chartContainer, labelData, velocityData, throughputData);
}

_app.renderVelocityVisual = function (chartContainer, labelData, velocityData, throughputData) {
    let chartId = "velocity-container";
    let viewId = "velocity-view";

    // Add a container element
    _a.$htmlNode("div", chartContainer)
        .$id(chartId)
        .$class("container");

    // Add the visuals
    _a.container(viewId, _ => {
        // Velocity
        _.ellipses(velocityData, [_a.$cx(20), _a.$maxY(50), _a.$diameter(10), _a.$cxIncrement(40), _a.$alignCYBottom(110)]);
        _.lines(velocityData, [_a.$x(20), _a.$xIncrement(40), _a.$width(40), _a.$maxHeight(50), _a.$alignBottom(110)]);
        _.labels(velocityData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(110), _a.$xMargin(-5), _a.$yMargin(-10), _a.$width(5), _a.$xIncrement(40)]);
        _.label("Velocity", [_a.$appendCSS("legend"), _a.$alignBottom(120), _a.$xMargin(20), _a.$yMargin(0)]);

        // Throughput
        _.bars(throughputData, [_a.$x(20), _a.$maxHeight(50), _a.$alignBottom(200), _a.$width(30), _a.$xIncrement(40)]);
        _.hLine([_a.$y(200), _a.$x(5), _a.$width(200), _a.$appendCSS("axis")]);
        _.labels(throughputData, [_a.$x(20), _a.$rawDataValue(), _a.$maxHeight(50), _a.$alignBottom(200), _a.$xMargin(-5), _a.$yMargin(-5), _a.$width(5), _a.$xIncrement(40)]);
        _.label("Throughput", [_a.$appendCSS("legend"), _a.$alignBottom(225), _a.$xMargin(20), _a.$yMargin(15)]);

        _.labels(labelData, [_a.$x(20), _a.$rawDataValue(), _a.$alignBottom(200), _a.$xMargin(-5), _a.$yMargin(15), _a.$width(5), _a.$xIncrement(40)]);
        _.label(`Team Metric: Velocity & Throughput`, [_a.$appendCSS("title"), _a.$xMargin(20), _a.$xMargin(TitleY)]);
    }, _a.$id(chartId));
}

