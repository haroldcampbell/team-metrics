const _a = metrics.ancui;
const _u = metrics.utils;

let app = {
    sprintData:null
};

app.boot = function () {
    let sprintData;

    sprintData = this.processData();

    console.log("[app.boot]", sprintData);

    this.renderSprintCycleTime(sprintData);
    this.renderSprintSummary(sprintData);
    this.renderEstimatesForStories(sprintData);
}