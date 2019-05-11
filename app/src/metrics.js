import * as ancui from '../../anemic-components/lib/ancui.js'
import * as utils from '../../anemic-components/lib/utils.js'
import * as d3 from "../../node_modules/d3-fetch/dist/d3-fetch.js"

export let worksheet = [];
export  {
    d3,
    ancui,
    utils,
}

d3.csv("./test-data/mortgage.csv").then(function (data) {
    worksheet = data;
    app.boot()
});
