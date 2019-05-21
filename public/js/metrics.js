import * as ancui from '../../anemic-components/lib/ancui.js'
import * as utils from '../../anemic-components/lib/utils.js'
import * as d3 from "../../node_modules/d3-fetch/dist/d3-fetch.js"

import * as app from "./inline-app.js"
// import "./inline-common.js"
// import "./inline-process-data.js"

export {
    d3,
    ancui,
    utils,
}

const urlParams = new URLSearchParams(window.location.search);
const pathnameParts = window.location.pathname.split("/")
const teamId = pathnameParts[pathnameParts.length - 1]

console.log("teamId", teamId)
d3.csv(`/f/${teamId}`).then(function (worksheet) {
    let _app = app.getApp();

    console.log("[app]", _app)

    _app.boot(worksheet);
});