import * as _a from '../../anemic-components/lib/ancui.js'
import * as _u from '../../anemic-components/lib/utils.js'

let __app = {
    sprintData:null
};

__app.boot = function () {
    let sprintData = this.processData();

    this.renderTeamVelocity(sprintData);
    this.renderTeamSummary(sprintData);
    this.renderEstimatesForStories(sprintData);
}

export function getApp() {
    return __app;
}