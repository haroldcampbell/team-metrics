import * as _a from '../../anemic-components/lib/ancui.js'
// import * as _u from '../../anemic-components/lib/utils.js'
import {getComputedStyle} from "./inline-common.js"

let __grid = {
    headerNodes: null,
    rowNodes: null,
}

export function getGrid() {
    return __grid;
}

__grid.initializeGrid = function (worksheet) {
    let gridRootNode = _a.$id("data-grid");
    let containerNode = _a.$htmlNode("div", gridRootNode)
        .$class("grid-container");

    this.headerNodes = this.createHeaderRow(containerNode, worksheet);
    this.rowNodes = this.createDataRows(containerNode, worksheet);
    this.alignCells(containerNode, worksheet);
}

__grid.createHeaderRow = function (containerNode, worksheet) {
    let children = {};
    let totalWidth = 0;
    let rowNode = _a.$htmlNode("div", containerNode)
        .$class("data-grid-header-row");


    worksheet.columns.forEach(columnName => {
        let cellNode = _a.$htmlNode("div", rowNode)
            .$class("data-grid-header-cell");

        cellNode.textContent = columnName;
        let width = getComputedStyle(cellNode).width;

        children[columnName] = {
            node: cellNode,
            width: width,
        }
        totalWidth += width;
    });

    return {
        node: rowNode,
        children: children,
        rowWidth: totalWidth
    };
}

__grid.createDataRows = function (containerNode, worksheet) {
    let [first, ...otherRows] = worksheet;
    let rowNodes = [];
    let columns = worksheet.columns;

    otherRows.forEach(row => {
        let children = {};
        let rowNode = _a.$htmlNode("div", containerNode)
            .$class("data-grid-row");

        columns.forEach(columnName => {
            let cellNode = _a.$htmlNode("div", rowNode)
                .$class("data-grid-row-cell");

            const cellValue = row[columnName];
            cellNode.textContent = cellValue;
            children[columnName] = cellNode;
        });

        rowNodes.push({
            node: rowNode,
            children: children,
        });
    });

    return rowNodes;
}

__grid.alignCells = function (containerNode, worksheet) {

    worksheet.columns.forEach(columnName => {
        let style = `flex: 0 0 ${this.headerNodes.children[columnName].width}px`;
        this.headerNodes.children[columnName].node.$style(style);
    });

    this.rowNodes.forEach(rowNode => {
        worksheet.columns.forEach(columnName => {
            const cellNode = rowNode.children[columnName];
            let style = `flex: 0 0 ${this.headerNodes.children[columnName].width}px`;
            cellNode.$style(style);
        });
        rowNode.node.style.width = this.headerNodes.rowWidth + "px";
    });

    this.headerNodes.node.style.width = this.headerNodes.rowWidth + "px";
    containerNode.style.width = this.headerNodes.rowWidth + "px";
}