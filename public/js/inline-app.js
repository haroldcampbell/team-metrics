import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'
import * as grid from './grid.js'

let __app = {
    sprintData:null
};

__app.boot = function (worksheet) {
    let _grid = grid.getGrid();

    _grid.initializeGrid(worksheet);

    let sprintData = this.processData(worksheet);

    this.renderTeamVelocity(sprintData);
    this.renderTeamSummary(sprintData);
    this.renderEstimatesForStories(sprintData);
}

export function getApp() {
    return __app;
}