var metrics =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["$isTruthy"] = $isTruthy;
/* harmony export (immutable) */ __webpack_exports__["$isEmpty"] = $isEmpty;
/* harmony export (immutable) */ __webpack_exports__["$log"] = $log;
/* harmony export (immutable) */ __webpack_exports__["$degreesToRadians"] = $degreesToRadians;
/* harmony export (immutable) */ __webpack_exports__["$polarToCartesian"] = $polarToCartesian;
/* harmony export (immutable) */ __webpack_exports__["copyProps"] = copyProps;
/**
 * Tests the truthiness of the specified object
 *
 * @function $isTruthy
 *
 * @param {Object} obj
 *
 * @return {boolean}
 */
function $isTruthy(obj) {
  return !(obj === null) && !(obj == null);
}

function $isEmpty(obj) {
  return !$isTruthy(obj);
}
/**
 * Wrapper around console.log
 *
 * @function $log
 *
 * @param {String} message - The message to log to the console.
 * @param {boolean} trace - Show trace if truthy.
 */
function $log(message, trace) {
  console.log(message);
  if (trace) {
    console.trace()
  }
}

/**
 * Returns the specified angles in radians.
 *
 * @function degreesToRadians
 *
 * @param {Number} angleInDegrees - The angle to convert.
 *
 * @return {Number} - The angle in radians.
 */
function $degreesToRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180.0;
}

/**
 * Based on http://jsbin.com/sokacelaga/edit?html,js,output
 *
 * @function $polarToCartesian
 *
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} radius
 * @param {Number} angleInDegrees
 *
 * @return {Number}
 */
function $polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = $degreesToRadians(angleInDegrees);

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function copyProps(srcObj, targetObj, exclude=null) {
  for (let id in srcObj) {
    if (exclude != null && exclude.indexOf(id) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(srcObj, id)) continue;

    targetObj[id] = srcObj[id]
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = $id;
/* harmony export (immutable) */ __webpack_exports__["a"] = $class;
/* harmony export (immutable) */ __webpack_exports__["d"] = $moveBelow;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _$; });
/* harmony export (immutable) */ __webpack_exports__["b"] = $htmlNode;
/* harmony export (immutable) */ __webpack_exports__["e"] = $svgNode;
/* harmony export (immutable) */ __webpack_exports__["g"] = addShape;
/* harmony export (immutable) */ __webpack_exports__["o"] = text;
/* harmony export (immutable) */ __webpack_exports__["k"] = group;
/* harmony export (immutable) */ __webpack_exports__["l"] = hLine;
/* harmony export (immutable) */ __webpack_exports__["p"] = vLine;
/* harmony export (immutable) */ __webpack_exports__["m"] = line;
/* harmony export (immutable) */ __webpack_exports__["j"] = ellipse;
/* harmony export (immutable) */ __webpack_exports__["n"] = path;
/* harmony export (immutable) */ __webpack_exports__["h"] = arc;
/* harmony export (immutable) */ __webpack_exports__["i"] = axes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


/**
 * Returns the node specified by the name.
 *
 * @function $id
 *
 * @param {Object} name - either a string with the Id of the Node that we are
 *  looking for or a node.
 *
 * @return {DOMNode} returns the DOM node if found, or null it it doesn't exit.
 * Alternatively, if name is a DOM node, then name is simply returned.
 */
function $id(name) {
  if (typeof name === 'string') {
    return document.getElementById(name);
  }

  if (name.setAttributeNode != null) {
    /* name is an element */
    return name;
  }

  /* Bail! No clue */
  return null;
}

/**
 * Returns the node specified by the class.
 *
 * @function $id
 *
 * @param {Object} name - either a string with the class of the Node that we are
 *  looking for or a node.
 *
 * @return {DOMNode} returns the DOM nodes if found, or null it it doesn't exit.
 */
function $class(name, cName) {
  if (typeof name === 'string') {
    return document.getElementsByClassName(name);
  }

  if (name.setAttributeNode != null) {
    /* name is an element */
    return name.getElementsByClassName(cName);
  }

  /* Bail! No clue */
  return null;
}

/**
 * Positions the 'nodeName' node at the bottom of the render tree.
 *
 * @function $moveBelow
 *
 * @param {String} nodeName - The node that will be placed at the bottom
 * @param {String} referenceNodeName - The node that 'nodeName' should be
 *  placed below.
 */
function $moveBelow(nodeName, referenceNodeName) {
  let node = $id(nodeName);
  let referenceNode = $id(referenceNodeName);

  /* Positions the node at the bottom of the render tree. */
  node.parentElement.insertBefore(node, referenceNode);
}

let _$ = {
  __attr: function (node, name, setterCallback) {
    return function (val) {
      if (arguments.length == 0 || typeof val === 'undefined' || val == null) {
        /*
         Allows the function to be used as a getter.
         */
        let val = node.getAttribute(name);
        if (val == null) {
          return null;
        }

        let number = parseFloat(val);
        if (typeof number === 'number' && !isNaN(number)) {
          return number;
        }
        return val;
      }

      let att = document.createAttribute(name);
      if (setterCallback == null || typeof setterCallback === 'undefined') {
        att.value = val;
      } else {
        att.value = setterCallback(val);
      }
      node.setAttributeNode(att);

      return node;
    }
  },
  _id: function (node) {
    return this.__attr(node, 'id');
  },
  _x: function (node) {
    return this.__attr(node, 'x');
  },
  _y: function (node, setterCallback) {
    return this.__attr(node, 'y');
  },
  _cx: function (node) {
    return this.__attr(node, 'cx');
  },
  _cy: function (node, setterCallback) {
    return this.__attr(node, 'cy');
  },
  _rx: function (node) {
    return this.__attr(node, 'rx');
  },
  _ry: function (node, setterCallback) {
    return this.__attr(node, 'ry');
  },
  _style: function (node) {
    return this.__attr(node, 'style');
  },
  _class: function (node) {
    return this.__attr(node, 'class');
  },
  _height: function (node) {
    return this.__attr(node, 'height');
  },
  _width: function (node) {
    return this.__attr(node, 'width');
  },
  _attr: function (node) {
    return function (attrName, val) {
      if (arguments.length == 1) {
        /** If there is no value being set, try to
         *  return the current value of the attribute
         */
        return node.getAttribute(attrName);
      }

      let att = document.createAttribute(attrName);
      att.value = val;
      node.setAttributeNode(att);
      return node;
    }
  },
}

/**
 * Creates an node described by the specific tag. If the @parentElm is
 * given, then the node will be appended to the parent.
 *
 * @function node
 *
 * @param {String} namespace - type of node being created.
 *  HTML    -> http://www.w3.org/1999/xhtml
 *  SVG     -> http://www.w3.org/2000/svg
 *  MathML  -> http://www.w3.org/1998/mathml
 *
 * @param {String} tag - tag type that will be created. E.g. rect, path, etc.
 * @param {Object} parentElm - the parent to which the node will be added.
 *
 * @return {Object} The newly created node.
 */
function $node(namespace, tag, parentElm) {
  let node = document.createElementNS(namespace, tag);

  node.$id = _$._id(node);
  node.$class = _$._class(node);
  node.$style = _$._style(node);
  // node.$height = _$._height(node);
  // node.$width = _$._width(node);
  node.$attr = _$._attr(node);

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](parentElm)) {
    parentElm.appendChild(node);
  }

  return node;
}

/**
 * Creates an html node described by the specific tag. If the @parentElm is
 * given, then the node will be appended to the parent.
 *
 * @function $htmlNode
 *
 * @param {String} tag - svg tag type that will be created. E.g. rect, path, etc.
 * @param {Object} parentElm - the parent to which the node will be added.
 *
 * @return {Object} The newly created node.
 */
function $htmlNode(tag, parentElm) {
  return $node("http://www.w3.org/1999/xhtml", tag, parentElm);
}

/**
 * Creates an svg node described by the specific tag. If the @parentElm is
 * given, then the node will be appended to the parent.
 *
 * @function $svgNode
 *
 * @param {String} tag - svg tag type that will be created. E.g. rect, path, etc.
 * @param {Object} parentElm - the parent to which the node will be added.
 *
 * @return {Object} The newly created node.
 */
function $svgNode(tag, parentElm) {
  return $node("http://www.w3.org/2000/svg", tag, parentElm);
}

/**
 * @function addShape
 *
 * @param {String} parentId - is the id or actual object of parent. The method
 *  fails if the parent can't be found.
 *
 * @param {String} id - is the ID of the SVG element being added.
 * @param {String} shape - the type of SVG element to create. E.g. rect, path, etc.
 *
 * @return {Object} The newly created SVG child shape.
 */
function addShape(parentId, id, shape) {
  let parentElm = $id(parentId);

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](parentElm)) {
    throw new Error("[addShape] Can't find element parent with id:" + parentId);
  }

  let node = $svgNode(shape, parentElm)

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](id)) {
    node.$attr("id", id);
  }

  return node;
}

function text(parentId, id = null, x = 0, y = 0) {
  let r = addShape(parentId, id, "text");

  r.$x = _$._x(r)
  r.$y = _$._y(r)
  r.$height = _$._height(r)
  r.$width = _$._width(r)

  r.$height(0)
  r.$width(0)

  r.$xy = function (_x, _y) {
    r.$x(_x);
    r.$y(_y);

    return r;
  }

  r.$fontSize = function (size) {
    r.$attr("font-size", size);

    return r;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](x)) {
    r.$x(x)
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](y)) {
    r.$y(y)
  }

  r.$text = function (text) {
    r.textContent = text === 0 ? "" : text;
    return r;
  }

  return r;
}

/**
 * Creates a group SVG element.
 *
 * @function group
 *
 * @param {String} parentId - The id or element that the group element
 *  will be added to.
 * @param {String} id
 *
 * @return {Object} - The newly created group element.
 */
function group(parentId, id) {
  return addShape(parentId, id, "g");
}

/**
 * Creates a line SVG element that is horizontal at the specifed (x, y) point.
 *
 * @function hLine
 *
 * @param {String} parentId - The id or element that the line element
 *  will be added to.
 * @param {String} id
 * @param {Number} x - specifies the x-coordinate of the shape.
 * @param {Number} y - specifies the y-coordinate of the shape.
 * @param {Number} width - specifies the width of the line in pixels.
 *
 * @return {Object} - The newly created horizontal element
 */
function hLine(parentId, id) {
  let l = addShape(parentId, id, "line");

  l._$x = _$._x(l);
  l._$y = _$._y(l);
  l._$width = _$._width(l);

  l.$x = function (_x) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_x)) {
      return l._$x();
    }

    l.$attr("x1", _x);
    l.$attr("x2", _x);

    return l;
  }

  l.$y = function (_y) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_y)) {
      return l._$y();
    }

    l.$attr("y1", _y);
    l.$attr("y2", _y);

    return l;
  }

  l.$width = function (_w) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_w)) {
      return l._$width();
    }

    l._$width(_w)
    l.$attr("x2", l.$x() + _w);

    return l;
  }

  return l;
}

/**
 * Creates a line SVG element that is vertical at the specifed (x, y) point.
 *
 * @function vLine
 *
 * @param {String} parentId - The id or element that the line element
 *  will be added to.
 * @param {String} id
 * @param {Number} x - specifies the x-coordinate of the shape.
 * @param {Number} y - specifies the y-coordinate of the shape.
 * @param {Number} height - specifies the height of the line in pixels.
 *
 * @return {Object} - The newly created vertical element
 */
function vLine(parentId, id) {
  let l = addShape(parentId, id, "line");

  l._$x = _$._x(l);
  l._$y = _$._y(l);
  l._$height = _$._height(l);

  l.$x = function (_x) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_x)) {
      return l._$x();
    }

    l.$attr("x1", _x);
    l.$attr("x2", _x);

    return l;
  }

  l.$y = function (_y) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_y)) {
      return l._$y();
    }

    l.$attr("y1", _y);
    l.$attr("y2", _y);

    return l;
  }

  l.$height = function (_h) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_h)) {
      return l._$height();
    }

    l._$height(_h)
    l.$attr("y2", l.$y() + _h);

    return l;
  }

  return l;
}

/**
 * Creates a line SVG element that runs from (x1, y1) to (x2, y2).
 *
 * @function line
 *
 * @param {String} parentId - The id or element that the line element
 *  will be added to.
 * @param {String} id
 * @param {Number} x1 - specifies the x-coordinate of first point.
 * @param {Number} y1 - specifies the y-coordinate of first point.
 * @param {Number} x2 - specifies the x-coordinate of second point.
 * @param {Number} y2 - specifies the y-coordinate of second point.
 *
 * @return {Object} - The newly created line element
 */
function line(parentId, id, x1, y1, x2, y2) {
  return addShape(parentId, id, "line")
    .$attr("x1", x1)
    .$attr("y1", y1)
    .$attr("x2", x2)
    .$attr("y2", y2);
}

/**
 * Creates a ellipse SVG element.
 *
 * @function ellipse
 *
 * @param {String} parentId - The id or element that the ellipse element
 *  will be added to.
 * @param {String} id - The ID of the ellipse element
 *
 * @return {Object} - The newly created ellipse element
 */
function ellipse(parentId, id) {
  let e = addShape(parentId, id, "ellipse")

  e.$cx = _$._cx(e);
  e.$cy = _$._cy(e);
  e.$rx = _$._rx(e);
  e.$ry = _$._ry(e);

  e.$x = function (_x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_x) ? e.$cx(_x) : e.$cx();
  }
  e.$y = function (_y) {
    // if (utils.$isTruthy(_y)) {
    //   console.log("[_ellipse] in-$y set", _y, e.$cy())
    //   return e.$cy(_y);
    // }

    // console.log("[_ellipse] in-$y get", _y, e.$cy())

    // return e.$cy();
    return __WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_y) ? e.$cy(_y) : e.$cy();
  }

  e.$height = function (_h) {
    // if (utils.$isTruthy(_h)) {
    //   console.log("[_ellipse] in-$height set", _h, e.$ry())
    //   return e.$ry(_h)
    // }

    // console.log("[_ellipse] in-$height get", _h, e.$ry())
    // return e.$ry();
    return __WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_h) ? e.$ry(_h) : e.$ry();
  }
  e.$width = function (_w) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"](_w) ? e.$rx(_w) : e.$rx();
  }

  e.$strokeWidth = _$.__attr(e, "stroke-width");

  return e;
}

/**
 * Creates a path SVG element.
 *
 * @function path
 *
 * @param {String} parentId - The id of the parent or the parent element itself
 *  that the path element will be added to.
 * @param {String} id - The id of the new path element.
 *
 * @return {Object} - The newly created path element.
 */
function path(parentId, id) {
  let p = addShape(parentId, id, "path");

  p.$d = _$.__attr(p, "d");
  p.$strokeWidth = _$.__attr(p, "stroke-width");
  p.$attr("stroke-linecap", "round");
  p.$path = function (p1, p2, isSmooth) {
    if (isSmooth == null || !isSmooth) {
      let _path = `M${p1.x}, ${p1.y} L${p2.x}, ${p2.y}`;
      p.$d(_path);
      return;
    }

    let w = p2.x - p1.x;
    let h = p2.y - p1.y;
    let w2 = w / 2;
    // let h2 = h / 2;
    let _path = `M${p1.x},${p1.y} c${w2},${0} ${w2},${h} ${w},${h}`;
    p.$d(_path);
  }

  return p;
}

/**
 * Creates an arc SVG element.
 *
 * @function arc
 *
 * @param {String} parentId - The id or element that the ellipse element
 *  will be added to.
 * @param {String} id
 *
 * @return {Object} - The newly created arc element.
 */
function arc(parentId, id) {
  let a = addShape(parentId, id, "path")

  a.$d = _$.__attr(a, "d");
  a.$x = _$.__attr(a, "x");
  a.$y = _$.__attr(a, "y");
  a.$strokeWidth = _$.__attr(a, "stroke-width");

  a.$radius = _$.__attr(a, "radius");
  a.$startAngle = _$.__attr(a, "start-angle"); /* Sets/Gets the starting angle of Arc in degrees */

  a.__arcSpan = _$.__attr(a, "arc-span"); /* Sets/Gets the lenght of the Arc in degrees */
  a.$arcSpan = function (val) {
    let result = a.__arcSpan(val);
    if (result === 'undefined' || result === null) {
      return 0;
    }

    return result
  }

  a.$strokeColor = function (color) {
    a.$style("stroke:" + color)
  }

  a.$endAngle = function () {
    return this.$startAngle() + this.$arcSpan();
  }

  /** Calculates the core data elements used to render the path
   * @return {Object} TODO
   */
  a.__calcRenderData = function () {
    /* Originally based on http://jsbin.com/sokacelaga/edit?html,js,output */
    let [x, y, radius, startAngle, endAngle] = [a.$x(), a.$y(), a.$radius(), a.$startAngle(), a.$endAngle()];

    /** Rotate anti-clockwise by 90 degree in order to get the arcs starting
     * from the y-axis * */
    let start = __WEBPACK_IMPORTED_MODULE_0__utils__["$polarToCartesian"](x, y, radius, startAngle - 90); /** contains the M attributes x and y */
    let end = __WEBPACK_IMPORTED_MODULE_0__utils__["$polarToCartesian"](x, y, radius, endAngle - 90);
    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return {
      start,
      end,
      largeArcFlag
    };
  }

  /** Renders the actual path for the arc */
  a.__renderPath = function () {
    let {
      start,
      end,
      largeArcFlag
    } = a.__calcRenderData();

    /* More about arcs here: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths */
    let _path = [
      "M", start.x, start.y,
      "A", a.$radius(), a.$radius(), 0, largeArcFlag, 1, end.x, end.y,
    ].join(" ");

    a.$d(_path);
  }

  // Set the defaults
  a.$radius(0);
  a.$startAngle(0);
  a.$attr("stroke-linecap", "round");

  return a;
}

/**
 * Creates an axes group element.
 *
 * @function axes
 * @param {string} parentId - the id of the parent element
 *
 * @return {object}
 */
function axes(parentId) {
  let parentNode = $id(parentId);
  let _g = g(parentId);

  _g.$class("axes")

  _g.xaxis = function (yOffset) {
    _g.yOffset = yOffset;
    hline(_g, "x-axis", 1, yOffset, "100%");
    return _g;
  }

  _g.yaxis = function (xOffset) {
    _g.xOffset = xOffset;
    vline(_g, "y-axis", xOffset, 1, "100%");
    return _g;
  }

  parentNode._axis_g = _g;
  return _g;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows
  };
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$isTruthy", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["$isEmpty"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$log", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["$log"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$degreesToRadians", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["$degreesToRadians"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$polarToCartesian", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["$polarToCartesian"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "copyProps", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_js__["copyProps"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$id", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$class", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$moveBelow", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_$", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$htmlNode", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$svgNode", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addShape", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "group", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hLine", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "vLine", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ellipse", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axes", function() { return __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ancui_core_rect_js__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rect", function() { return __WEBPACK_IMPORTED_MODULE_2__ancui_core_rect_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ancui_core_connected_points_js__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "connectedPoints", function() { return __WEBPACK_IMPORTED_MODULE_3__ancui_core_connected_points_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ancui_data_js__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$data", function() { return __WEBPACK_IMPORTED_MODULE_4__ancui_data_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$noop", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$x", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$y", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$xMargin", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$yMargin", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$xIncrement", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$yIncrement", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$yOffset", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$xOffset", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$max", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxHeight", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxWidth", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxY", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxX", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxStrokeWidth", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$width", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$height", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$alignBottom", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$alignLeft", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$alignRight", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$group", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$joinGroupItems", function() { return __WEBPACK_IMPORTED_MODULE_5__ancui_intents_js__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcIntentFn", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcRenderFn", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcRotateBy", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcSpanOffset", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcSpanUnit", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcRadiusOffset", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$arcRadius", function() { return __WEBPACK_IMPORTED_MODULE_6__ancui_intents_arcs_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ancui_intents_text_js__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$textSize", function() { return __WEBPACK_IMPORTED_MODULE_7__ancui_intents_text_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$rawDataValue", function() { return __WEBPACK_IMPORTED_MODULE_7__ancui_intents_text_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$dataIndex", function() { return __WEBPACK_IMPORTED_MODULE_7__ancui_intents_text_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ancui_intents_style_js__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$css", function() { return __WEBPACK_IMPORTED_MODULE_8__ancui_intents_style_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$appendCSS", function() { return __WEBPACK_IMPORTED_MODULE_8__ancui_intents_style_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cx", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cy", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$rx", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$ry", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cxOffset", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cyOffset", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cxIncrement", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$cyIncrement", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$alignCYBottom", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$diameter", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$maxDiameter", function() { return __WEBPACK_IMPORTED_MODULE_9__ancui_intents_ellipses_js__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ancui_pipeline_create_visual_js__ = __webpack_require__(6);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ancui_pipeline_js__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getVisuals", function() { return __WEBPACK_IMPORTED_MODULE_11__ancui_pipeline_js__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "container", function() { return __WEBPACK_IMPORTED_MODULE_11__ancui_pipeline_js__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeChildNodes", function() { return __WEBPACK_IMPORTED_MODULE_11__ancui_pipeline_js__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "containerBoundingBox", function() { return __WEBPACK_IMPORTED_MODULE_11__ancui_pipeline_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ancui_visuals_js__ = __webpack_require__(15);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__$visuals", function() { return __WEBPACK_IMPORTED_MODULE_12__ancui_visuals_js__["a"]; });















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);




/**
 * Creates a rect SVG element at the specifed (x, y) point.
 *
 * @function rect
 *
 * @param {String} parentId - The id or element that the rect element
 *  will be added to.
 * @param {String} id
 * @param {Number} x - specifies the x-coordinate of the shape.
 * @param {Number} y - specifies the y-coordinate of the shape.
 *
 * @return {Object} - The newly created rect element.
 */
function rect(parentId, id = null, x = 0, y = 0) {
    let r = Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["g" /* addShape */])(parentId, id, "rect");

    r._$x = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */]._x(r)
    r._$y = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */]._y(r)
    r._$width = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */]._width(r);
    r._$height = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */]._height(r);
    r.$strokeWidth = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(r, "stroke-width");

    r.$x = _x => rectX(r, _x);
    r.$y = _y => rectY(r, _y);
    r.$width = _w => rectWidth(r, _w);
    r.$height = _h => rectHeight(r, _h);
    r.$xy = (_x, _y) => rectXY(r, _x, _y);

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](x)) {
        r.$x(x)
    }
    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](y)) {
        r.$y(y)
    }

    return r;
}

function rectX(r, _x) {
    if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_x)) {
        return r._$x();
    }

    // if (utils.$isEmpty(r._$width()) || r._$width() == 0) {
    // If there is no width, then just set the x
    // r._$x(_x);

    // return r;
    // }

    /*
     * I want the rect to remain centered around the x, regardless of
     * the changes to the width. Shift x to take width into consideration.
     */
    // let w = r._$width() // / 2.0
    r._$x(_x);

    return r;
}

function rectY(r, _y) {
    if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_y)) {
        return r._$y();
    }

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isEmpty"](r._$height()) || r._$height() == 0) {
        // If there is no width, then just set the y
        r._$y(_y);

        return r;
    }

    /*
     * I want the rect to remain centered around the y, regardless of
     * the changes to the height. Shift y to take width into consideration.
     */
    // let h = r._$height() / 2.0
    r._$y(_y) // - h);

    return r;
}

function rectXY(r, _x, _y) {
    r.$x(_x);
    r.$y(_y);

    return r;
}

function rectWidth(r, _w) {
    if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_w)) {
        return r._$width();
    }

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isEmpty"](r._$x()) || r._$x() == 0) {
        // If there is no x, then just set the width
        r._$width(_w);

        return r;
    }

    /*
     * I want the rect to remain centered around the x, regardless of
     * the changes to the width. Shift x to take width into consideration.
     */

    let w;
    let x = r._$x();

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isEmpty"](r._$width())) {
        w = _w
    } else {
        w = r._$width() == 0 ? _w : (r._$width() - _w);
    }
    let dw = w / 2.0;

    r._$x(x - dw);
    r._$width(_w);

    return r;
}

function rectHeight(r, _h) {
    if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_h)) {
        return r._$height();
    }

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isEmpty"](r._$y()) || r._$y() == 0) {
        // If there is no y, then just set the height
        r._$height(_h);

        return r;
    }

    /*
     * I want the rect to remain centered around the y, regardless of
     * the changes to the height. Shift y to take height into consideration
     */

    let h;
    let y = r._$y();
    if (__WEBPACK_IMPORTED_MODULE_1__utils__["$isEmpty"](r._$height())) {
        h = _h
    } else {
        h = r._$height() == 0 ? _h : (r._$height() - _h);
    }

    let dh = h / 2.0;

    r._$y(y - dh);
    r._$height(_h);

    return r;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectedPoints;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);




function connectedPoints(parentId, data) {
    let p = Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["g" /* addShape */])(parentId, undefined, "line");

    p.$x1 = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(p, 'x1');
    p.$y1 = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(p, 'y1');

    p.$x2 = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(p, 'x2');
    p.$y2 = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(p, 'y2');

    p.$strokeWidth = __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["f" /* _$ */].__attr(p, "stroke-width");

    p.$x = function (_x) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_x)) {
        return p.$x1();
      }

      if (data[0]._dataProperty === "y") {
        p.$x1(_x);
        p.$x2(_x);

        return p;
      }

      p.$y1(_x[0]);
      p.$y2(_x[1]);

      return p;
    }

    p.$width = function (_w) {
      if (data[0]._dataProperty === "y") {
        // p.$x1(_w);
        p.$x2(p.$x1() + _w);

        return p;
      }

      // console.log("wiwiwiw", data[0]._dataProperty === "y", _w)
      p.$x1(_w[0]);
      p.$x2(_w[1]);

      return p;
    }

    p.$y = function (_y) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_y)) {
        return p.$y1();
      }

      if (data[0]._dataProperty === "x") {
        p.$y1(_y);
        p.$y2(_y);

        return p
      }

      p.$y1(_y[0]);
      p.$y2(_y[1]);

      return p;
    }

    p.$height = function (_h) {
      if (!__WEBPACK_IMPORTED_MODULE_1__utils__["$isTruthy"](_h)) {
        if (data[0]._dataProperty === "x") {
          return [0, p.$y2() - p.$y1()];
        }
        return [p.$y1(), p.$y2()];
      }

      if (data[0]._dataProperty === "x") {
        // p.$y1(_h);
        p.$y2(p.$y1() + _h);

        return p
      }

      // console.log("setting height", _h)
      p.$y1(_h[0]);
      p.$y2(_h[1]);

      return p;
    }

    // console.log("connectedPoints", data, p)

    return p;
  }

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __createVisual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


const bindIntentsActions = (visual) => {
    const intents = {
        __intents: null,

        getIntents() {
            return this.__intents;
        },

        withIntents(newIntents) {
            this.__intents = newIntents;
            return this;
        },

        applyIntents(intents) {
            if (this.svgNodes.length == 0) {
                return;
            }

            if (intents === undefined || intents === null) {
                intents = this.__intents;
            }

            for (let intent of intents) {
                intent.action(this);
            }
        }
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["copyProps"])(intents, visual);
}

const bindShapeActions = (visual, container) => {
    const shapes = {
        /* Used to store the shapes that are created */
        svgNodes: [],

        /* The callback must be of the form callback(container) */
        __createSVGShapeCallback: null,

        /* Callback that is used determine how shapes are create */
        __createShapesCallback: null,

        __saveSVGShape(svgShape) {
            this.svgNodes.push(svgShape);
        },

        __saveSVGShapeData(svgShape, dataIndex, dataValue, rawDataValue) {
            svgShape._dataValue = dataValue;
            svgShape._rawDataValue = rawDataValue;
            svgShape._dataIndex = dataIndex;
            svgShape._dataProperty = visual.__data.target;
        },

        __defaultMultipleShapesCreator() {
            this.__data.activeDataItems().forEach((d, index) => {
                let svgShape = this.__createSVGShapeCallback(container);
                this.__saveSVGShape(svgShape);
                this.__saveSVGShapeData(svgShape, index, d, this.__data.rawDataItem(index));
            });
        },

        __defaultSingleShapeCreator() {
            let svgShape = this.__createSVGShapeCallback(container);
            this.__saveSVGShape(svgShape);
        },

        createShapes() {
            this.svgNodes = [];
            this.__createShapesCallback(this);
        },

        /* The callback that will be used to create the actual shape.
         * The function will be called as callback(container) */
        withSVGShapeCreator(callback) {
            if (typeof callback !== 'function') {
                throw new Error('Invalid callback parameter.' +
                    'The callback must be of the form callback(container)')
            }

            this.__createSVGShapeCallback = callback;
            return this;
        },

        removeExistingShapes() {
            this.svgNodes.forEach(shape => {
                shape.remove();
            });
        }
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["copyProps"])(shapes, visual);
}

function __createVisual(__$visuals, currentContainer) {
    const visual = {
        __$visuals: __$visuals,
        container: currentContainer,
        // __isSingularVisual: false, // This visual will not have several visual.
        __totalVisualsCreated: 0,
        __data: null,

        withData(newData) {
            /* TODO: Add test to check that the event handlers are wired */
            this.__data = newData;
            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["$isTruthy"])(this.__data)) {
                this.__data.withDataChangedCallback(() => this.onDataDidChange());
            }
            return this;
        },

        onDataDidChange() {
            this.removeExistingShapes();
            this.createShapes();
            this.applyIntents();
        },

        /**
         * Creates and adds the newly created visual to the pipeline.
         *
         * @param {Array} intents - an array of intents
         * @param {Function} callback - used to create the actual shape. The function
         *  will be called as callback(container)
         *
         * @return {Object} the newly created visual
         */
        registerVisual(intents, callback) {
            this.__isSingularVisual = false;
            this.withIntents(intents);
            this.withSVGShapeCreator(callback);

            return this;
        },

        withCreateShapesCallback(callback) {
            this.__createShapesCallback = callback;

            return this;
        }
    };

    bindIntentsActions(visual)
    bindShapeActions(visual, currentContainer)

    visual.withCreateShapesCallback(visual.__defaultMultipleShapesCreator);

    return visual;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getVisuals;
/* harmony export (immutable) */ __webpack_exports__["a"] = container;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeChildNodes;
/* harmony export (immutable) */ __webpack_exports__["b"] = containerBoundingBox;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ancui_pipeline_create_visual_js__ = __webpack_require__(6);




let __$visuals = {
  name: "visuals",
  nodes: {},
  currentContainer: null,
  __postRenderCallback: null,
};

__$visuals.getCurrentContainer = function () {
  return this.currentContainer;
}

__$visuals.createVisual = function () {
  let visual = Object(__WEBPACK_IMPORTED_MODULE_2__ancui_pipeline_create_visual_js__["a" /* default */])(this, this.currentContainer);

  this.updatePipeline(visual);

  return visual;
}

/**
  Adds a new rendering element to the pipeline.
  A rendering element is the tuple of visual and related effects
  that will be applied to the shapes that make up the visual.
  @function updatePipeline

  @param {Object} visual - An object that has the shapes {svgNodes:[], __data: {...}}.
*/
__$visuals.updatePipeline = function (visual) {
  this.currentContainer.pipeline.push(visual);
}

/**
  Internal function used to actually render a pipeline.

  @function __renderPipeline
  @param {Object} pipeline
*/
function __renderPipeline(pipeline) {
  pipeline.forEach((visual) => {
    visual.createShapes();
    visual.applyIntents(); // defined in ancui-pipeline-create-visual.js
  });
}

/**
  Defines a callback that is called after rendering is completed.
  @function onRenderCompleted
  @param {callback} callback
  @return {object}
*/
__$visuals.onRenderCompleted = function (callback) {
  __$visuals.currentContainer.__postRenderCallback = callback;

  return this;
}

/**
  Returns the internal visuals object
  @function getVisuals
  @return {Object} the __$visuals object
*/
function getVisuals() {
  return __$visuals;
}

/**
  Creates a container that contains the visuals defined in the block.
  @function container
  @param {string} id - The id of the container.
  @param {Callback} callback -
  @param {Node} parentElm -

  @return {Object}
*/
function container(id, callback, parentElm) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(__$visuals.nodes[id])) {
    __$visuals.currentContainer = __$visuals.nodes[id];

    return __$visuals;
  }

  let pipeline = [];
  let node = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  node.$id = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._id(node);
  node.$class = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._class(node);
  node.$style = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._style(node);
  node.$height = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._height(node);
  node.$width = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._width(node);
  node.$attr = __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["f" /* _$ */]._attr(node);
  node.$id(id);

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(parentElm)) {
    parentElm.appendChild(node);
  } else {
    document.body.appendChild(node);
  }

  __$visuals.nodes[id] = node;
  __$visuals.currentContainer = node;
  __$visuals.currentContainer.pipeline = pipeline;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(callback)) {
    callback(__$visuals);
  }

  __renderPipeline(pipeline);

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(__$visuals.currentContainer.__postRenderCallback)) {
    __$visuals.currentContainer.__postRenderCallback();
  }

  __$visuals.currentContainer = null;

  return __$visuals;
}

function removeChildNodes(parentElementId) {
  let targetNodes = [];
  let parent = Object(__WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["c" /* $id */])(parentElementId)

  Object.keys(__$visuals.nodes).forEach(id => {
    const node = __$visuals.nodes[id];
    const result = parent.contains(node);

    if (result) {
      targetNodes.push(id)
    }
  })

  targetNodes.forEach(id => {
    delete __$visuals.nodes[id];
  });

  while (parent.firstChild) {
    parent.firstChild.remove();
  }

  return __$visuals;
}

/**
 * @param {Object} currentNode
 * @return {Object} Returns an object {x, y, width, height}
 */
function containerBoundingBox(currentNode) {
  return currentNode.currentContainer.getBBox();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(16);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = $data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);


const normalizeData = (data, maxItem) => {
  let normalized = [];
  data.forEach(d => {
    let n = d / maxItem;
    normalized.push(n);
  })
  return normalized;
}

/* @return {number} - The max value in newData. */
const findMax = (data, oldMax = Number.NEGATIVE_INFINITY) => {
  return Math.max(...data, [oldMax]);
}

/* @return {number} - The min value in newData. */
const findMin = (data, oldMin = Number.POSITIVE_INFINITY) => {
  return Math.min(...data, [oldMin]);
}


const bindAppendActions = (dataObj) => {
  const actions = {
    __appendedData(newData, appenderAction) {
      const oldMax = this.max();
      let newMax = findMax(newData, oldMax);

      if (oldMax > newMax) {
        // Only need to normalize the newData
        console.log(appenderAction)
        appenderAction(...normalizeData(newData, oldMax))
      } else {
        // Re-normalize everything
        this._normalizedData = [...normalizeData(this.data, newMax)];
      }
      this.onDataChanged();
    },

    appendDataStart(newData) {
      // append newData to the existing raw data
      this.data.push(...newData);
      this.__appendedData(newData, (d) => this._normalizedData.push(d));

      return this._normalizedData;
    },

    appendDataEnd(newData) {
      // insert newData onto the start of the existing raw data
      this.data.unshift(...newData);
      this.__appendedData(newData, (d) => this._normalizedData.unshift(d));

      return this._normalizedData;
    },
  }

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["copyProps"])(actions, dataObj)
}

const bindWindowingActions = (dataObj, data) => {
  const actions = {
    _startIndex: 0,
    _visibleItems: 0,
    _isClippingData: false,
    _activeDataItems: null,
    _onDataChangedCallback: null,
    _clippedData: null,

    _asClipped() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this._clippedData)) {
        return this._clippedData;
      }

      this._asNormalized();
      this._clippedData = [
        ...this._normalizedData.slice(this._startIndex, this._startIndex + this._visibleItems)
      ]

      return this._clippedData;
    },

    _resetCachedValues() {
      this._clippedData = null; // Reset cached values
      this._activeDataItems = null;
    },

    activeDataItems() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this._activeDataItems)) {
        return this._activeDataItems;
      }

      this._activeDataItems = this._isClippingData ? this._asClipped() : this._asNormalized();

      return this._activeDataItems;
    },

    /* @return {Number} - The un-normalized value at the specified index */
    rawDataItem(index) {
      return this.data[index]
    },

    onDataChanged() {
      this._resetCachedValues();

      if ((this._onDataChangedCallback == null) || (typeof this._onDataChangedCallback != "function")) {
        return;
      }
      this._onDataChangedCallback();
    },

    withVisibleItems(numVisibleItems, startFrom = 0) {
      this._visibleItems = numVisibleItems;
      this._isClippingData = (this._visibleItems < data.length);
      this._startIndex = startFrom < data.length ? startFrom : 0;
      this.onDataChanged();

      return this
    },

    withDataChangedCallback(callback) {
      if ((callback != null) && (typeof callback == "function")) {
        this._onDataChangedCallback = callback
      }

      return this;
    },
  }

  actions.withVisibleItems(data.length)

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["copyProps"])(actions, dataObj)
}

/**
 * @function $data
 * @param {Array} data - an array of values (e.g [1,4,5,8])
 * @param {String} targetAttr - the attribute to which the data is applied. (e.g. width, height, radius, etc.)
 * @return {Object}
 */
function $data(data, targetAttr = null) {
  let dataObj = {
    type: "data",
    target: targetAttr,
    _maxData: null,
    _normalizedData: null,
    data,

    rawData() {
      return this.data;
    },

    rawItemAtIndex(index) {
      return this.data[index]
    },

    /* @return {number} - Zero or the length of the data array.*/
    itemCount() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this.data)) {
        return this.data.length;
      }
      return 0;
    },

    /* @return {Array} - An array of normalized values (i.e. between 0 t0 1.0).*/
    _asNormalized() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this._normalizedData)) {
        /* Return the cached value if it exists. */
        return this._normalizedData;
      }

      this._normalizedData = [];
      let maxData = this.max();

      this.data.forEach(d => {
        let n = d / maxData;
        this._normalizedData.push(n);
      })

      return this._normalizedData;
    },

    /* @return {number} - The max value in values array.*/
    max() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this._maxData)) {
        /* Return the cached value if it exists. */
        return this._maxData;
      }
      this._maxData = findMax(data);

      return this._maxData;
    },

    /* @return {number} - The min value in values array.*/
    min() {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(this._minData)) {
        /* Return the cached value if it exists. */
        return this._minData;
      }
      this._minData = findMin(data);

      return this._minData;
    },
  };

  bindAppendActions(dataObj);
  bindWindowingActions(dataObj, data);

  return dataObj;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["m"] = $noop;
/* harmony export (immutable) */ __webpack_exports__["o"] = $x;
/* harmony export (immutable) */ __webpack_exports__["s"] = $y;
/* harmony export (immutable) */ __webpack_exports__["q"] = $xMargin;
/* harmony export (immutable) */ __webpack_exports__["u"] = $yMargin;
/* harmony export (immutable) */ __webpack_exports__["p"] = $xIncrement;
/* harmony export (immutable) */ __webpack_exports__["t"] = $yIncrement;
/* harmony export (immutable) */ __webpack_exports__["v"] = $yOffset;
/* harmony export (immutable) */ __webpack_exports__["r"] = $xOffset;
/* harmony export (immutable) */ __webpack_exports__["g"] = $max;
/* harmony export (immutable) */ __webpack_exports__["h"] = $maxHeight;
/* harmony export (immutable) */ __webpack_exports__["j"] = $maxWidth;
/* harmony export (immutable) */ __webpack_exports__["l"] = $maxY;
/* harmony export (immutable) */ __webpack_exports__["k"] = $maxX;
/* harmony export (immutable) */ __webpack_exports__["i"] = $maxStrokeWidth;
/* harmony export (immutable) */ __webpack_exports__["n"] = $width;
/* harmony export (immutable) */ __webpack_exports__["e"] = $height;
/* harmony export (immutable) */ __webpack_exports__["a"] = $alignBottom;
/* harmony export (immutable) */ __webpack_exports__["b"] = $alignLeft;
/* harmony export (immutable) */ __webpack_exports__["c"] = $alignRight;
/* harmony export (immutable) */ __webpack_exports__["d"] = $group;
/* harmony export (immutable) */ __webpack_exports__["f"] = $joinGroupItems;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ancui_core_js__ = __webpack_require__(1);



/**
 * @function $noop
 * @param {Callback} callback - An optional callback that is called when
 * the action parameter is triggered for the action.
 *
 * @return {Object} Intent meta-data
 */
function $noop(callback) {
  return {
    type: "effects",
    name: "noop",
    data: null,
    action(visuals) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(callback)) {
        callback();
      }
    }
  };
}

/**
 * Sets the x value of the visuals
 * @function $x
 * @param {Number} data - sets the $x amount for the shape
 * @return {Object} Intent meta-data
 */
function $x(data) {
  return {
    type: "effect",
    name: "x",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$x(this.data);
      });
    }
  };
}

/**
 * Sets the y value of the visuals
 *
 * @function $y
 * @param {Number} data - sets the $y amount for the shape
 * @return {Object} Intent meta-data
 */
function $y(data) {
  return {
    type: "effect",
    name: "y",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$y(this.data);
      });
    }
  };
}

/**
 * Shifts the x value of the visuals by the specified margin
 * Best if applied after all the other intents last
 * @function $xMargin
 * @param {Number} data - shifts the $x amount for the shape
 * @return {Object} Intent meta-data
 */
function $xMargin(data) {
  return {
    type: "effect",
    name: "xMargin",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$x(v.$x() + this.data);
      });
    }
  };
}

/**
 * Shifts the y value of the visuals by the specified margin
 * Best if applied after all the other intents last
 * @function $yMargin
 * @param {Number} data - shifts the $y amount for the shape
 * @return {Object} Intent meta-data
 */
function $yMargin(data) {
  return {
    type: "effect",
    name: "yMargin",
    data,
    flip,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$y(v.$y() + this.data);
      });
    }
  };
}

/**
 * Sets the x-distance between the visuals
 * Is independent of the width of the visual
 * @function $xIncrement
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $xIncrement(data) {
  return {
    type: "effect",
    name: "xIncrement",
    data,
    action(visuals) {
      let [first, ...rest] = visuals.svgNodes;
      let x = first.$x() + this.data;

      rest.forEach(v => {
        v.$x(x);
        x = x + this.data;
      });
    }
  };
}

/**
 * Sets the y-distance between the visuals
 * Is independent of the height of the visual
 * @function $yIncrement
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $yIncrement(data) {
  return {
    type: "effect",
    name: "yIncrement",
    data,
    action(visuals) {
      let [first, ...rest] = visuals.svgNodes;
      let y = first.$y() + this.data;

      rest.forEach(v => {
        v.$y(y);
        y = y + this.data;
      });
    }
  };
}

/**
 * Sets the y-distance between the visuals
 *
 * @function $yOffset
 * @param {Number} data - the vertical offset amount
 * @return {Object} Intent meta-data
 */
function $yOffset(data) {
  return {
    type: "effect",
    name: "yOffset",
    data,
    action(visuals) {
      let [first, ...rest] = visuals.svgNodes;
      let y = first.$y() + first.$height() + this.data;

      rest.forEach(v => {
        v.$y(y);
        y = y + this.data + v.$height();
      });
    }
  };
}

/**
 * Sets the x-distance between the visuals
 * Is affected by the width of the visual
 * @function $xOffset
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $xOffset(data) {
  return {
    type: "effect",
    name: "xOffset",
    data,
    action(visuals) {
      let [first, ...rest] = visuals.svgNodes;
      let x = first.$x() + first.$width() + this.data;

      rest.forEach(v => {
        v.$x(x);
        x = x + this.data + v.$width();
      });
    }
  };
}

/**
 * Scales the width and height based on the value of the largest item.
 *
 * @function $max
 * @param {Number} data - the maximum width and height to which visuals will be scalled
 * @return {Object} Intent meta-data
 */
function $max(data) {
  return {
    type: "effect",
    name: "max",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        let m = this.data * v._dataValue;
        v.$height(m)
        v.$width(m)
      })
    }
  };
}

/**
 * Scale the height based on the value of the largest item.
 *
 * @function $maxHeight
 * @param {Number} data - the maximum height to which visuals will be scaled
 * @return {Object} Intent meta-data
 */
function $maxHeight(data) {
  return {
    type: "effect",
    name: "maxHeight",
    data,
    action(visuals) {
      /* Scale the items by the height and align using the max height */
      visuals.svgNodes.forEach(v => {
        // if (v._dataProperty != "height") {
        //   console.log('$maxHeight requires dataProperty: "height"')
        //   return;
        // }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(v._dataValue.map)) {
          let values = v._dataValue.map(item => this.data * item.d);

          v.$height(values)
          return
        }

        let h = this.data * v._dataValue;
        v.$height(h)
      });
    }
  };
}

/**
 * Scale the width based on the value of the largest item. This intent can
 * *ONLY* be applied to data has a width attribute. See the example below.
 *
 * @function $maxWidth
 *
 * @param {Number} data - the maximum width to which visuals will be scaled
 * @return {Object} Intent meta-data
 * @example
 *   var barsData = $data([50, 20, 30, 10, 50], "width");
 *   container("c4", c => {
 *     c.bars(barsData, [$maxWidth(50), $x(50), $yOffset(30), $height(20)])
 *   })
 */
function $maxWidth(data) {
  return {
    type: "effect",
    name: "maxWidth",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        // if (v._dataProperty != "width") {
        //   console.log('$maxWidth requires dataProperty: "width"')
        //   return;
        // }

        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(v._dataValue.map)) {
          let values = v._dataValue.map(item => this.data * item.d);

          v.$width(values)
          return
        }

        let w = this.data * v._dataValue;
        v.$width(w)
      })
    }
  };
}

/**
 * Scale the y-coord based on the value of the largest item.
 *
 * @function $maxY
 * @param {Number} data - the maximum y-coord to which visuals will be scaled
 * @return {Object} Intent meta-data
 */
function $maxY(data) {
  return {
    type: "effect",
    name: "maxY",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        // if (v._dataProperty != "y") {
        //   console.log('$maxY requires dataProperty: "y"')
        //   return;
        // }

        let y = this.data * v._dataValue;
        v.$y(y)
      })
    }
  };
}

/**
 * Scale the x-coord based on the value of the largest item.
 *
 * @function $maxX
 * @param {Number} data - the maximum x-coord to which visuals will be scaled
 * @return {Object} Intent meta-data
 */
function $maxX(data) {
  return {
    type: "effect",
    name: "maxX",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        // if (v._dataProperty != "y") {
        //   console.log('$maxY requires dataProperty: "y"')
        //   return;
        // }

        let x = this.data * v._dataValue;
        v.$x(x)
      })
    }
  };
}

/**
 * Scale the stroke based on the value of the largest item.
 *
 * @function $maxStrokeWidth
 * @param {Number} data - the maximun stroke to which visuals will be scalled
 * @return {Object} Intent meta-data
 */
function $maxStrokeWidth(data) {
  return {
    type: "effect",
    name: "maxStroke",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        // if (v._dataProperty != "strokeWidth") {
        // console.log('$maxStrokeWidth requires dataProperty: "strokeWidth"')
        // return;
        // }

        let y = this.data * v._dataValue;
        v.$strokeWidth(y)
      })
    }
  };
}

/**
 * Sets the width of all the visuals.
 *
 * @function $width
 * @param {Number} data - the width of the visual
 * @return {Object} Intent meta-data
 */
function $width(data) {
  return {
    type: "effect",
    name: "width",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$width(this.data)
      });
    }
  }
}

/**
 * Sets the height of all the visuals.
 *
 * @function $height
 * @param {Number} data - the height of the visuals
 * @return {Object} Intent meta-data
 */
function $height(data) {
  return {
    type: "effect",
    name: "height",
    data,
    action(visuals) {
      visuals.svgNodes.forEach(v => {
        v.$height(this.data)
      });
    }
  }
}

/**
 * Aligns all visuals along the bottom of the "y-axis".
 *
 * This method works best if it is called after the $maxHeight(...) method is called,
 * or after the $height() is somehow set.
 *
 * Note: The $y intent has no effect if called before this intent.
 *
 * @function $alignBottom
 * @param {number} yBaseline - an optional yBaseline that is used to determine the position the
 * visuals. If this value is not supplied, then the visuals.__data.max() is used.
 * @return {Object} Intent meta-data
 */
function $alignBottom(yBaseline) {
  return {
    type: "effect",
    name: "align",
    action(visuals) {
      let baselineValue = yBaseline || visuals.__data.max();

      /* If the height is already set, then align based on the height */
      for (let v of visuals.svgNodes) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(v.$height().map)) {
          let values = v.$height().map(item => baselineValue - item);
          v.$y(values);
          continue;
        }

        v.$y(baselineValue - v.$height());
      }
    }
  }
}

/**
 * Aligns all visuals along the left of the "x-axis".
 *
 * This method works best if it is called after the $maxWidth(...) method is called,
 * or after the $width() is somehow set.
 *
 * Note: The $x intent has no effect if called before this intent.
 *
 * @function $alignLeft
 * @param {number} xBaseline - an optional xBaseline that is used to determine the position the
 * visuals. If this value is not supplied, then the visuals.__data.max() is used.
 * @return {Object} Intent meta-data
 */
function $alignLeft(xBaseline) {
  return {
    type: "effect",
    name: "align",
    action(visuals) {
      let baselineValue = xBaseline || visuals.__data.max();

      /* If the width is already set, then align based on the width */
      for (let v of visuals.svgNodes) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(v.$width().map)) {
          let values = v.$width().map(item => baselineValue);
          v.$x(values);
          continue;
        }
        v.$x(baselineValue)
      }
    }
  }
}

/**
 * Aligns all visuals along the right of the "x-axis".
 *
 * This method works best if it is called after the $maxWidth(...) method is called,
 * or after the $width() is somehow set.

 * Note: The $x intent has no effect if called before this intent.
 *
 * @function $alignRight
 * @param {number} xBaseline - an optional xBaseline that is used to determine the position the
 * visuals. If this value is not supplied, then the visuals.__data.max() is used.
 * @return {Object} Intent meta-data
 */
function $alignRight(xBaseline) {
  return {
    type: "effect",
    name: "align",
    action(visuals) {
      let baselineValue = xBaseline || visuals.__data.max();

      /* If the width is already set, then align based on the wdith */
      for (let v of visuals.svgNodes) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["$isTruthy"])(v.$width().map)) {
          let values = v.$width().map(item => baselineValue - item);
          v.$x(values);
          continue;
        }

        v.$x(baselineValue - v.$width());
      }
    }
  }
}

/**
 * Adds a group element with the @id set to name.
 *
 * @function $group
 * @param {String} name - the id of the group
 * @return {Object} Intent meta-data
 * @example
 *  // All of the ellipses will be added to a group with an id "e1".
 *  container("c4", c => {
 *   c.ellipses(ellipsesData, [$group("e1")])
 *  })
 */
function $group(name) {
  return {
    type: "effect",
    name: "group",
    data: name,
    action(visuals) {
      if (visuals.svgNodes.length == 0) {
        return;
      }

      let parent = visuals.svgNodes[0].parentElement;
      let g = Object(__WEBPACK_IMPORTED_MODULE_1__ancui_core_js__["k" /* group */])(parent, name);

      visuals.svgNodes.forEach(v => {
        g.appendChild(v);
      });
    }
  }
}

/**
 * @function $joinGroupItems
 * @param {Array} groupsArray - An array with the id of the groups that contains
 * the elements that visuals that should be connected.
 * @param {bool} isSmooth - True if line should be curved.
 * @return {Object} Intent meta-data
 */
function $joinGroupItems(groupsArray, isSmooth = true) {
  return {
    type: "effect",
    name: "joinGroupItems",
    data: groupsArray,
    action(visuals) {
      if (visuals.svgNodes.length == 0 || groupsArray.length != 2) {
        return;
      }

      let parent = visuals.svgNodes[0].parentElement
      let g1 = parent.querySelector("#" + groupsArray[0])
      let g2 = parent.querySelector("#" + groupsArray[1])

      /* Make a guess that the first group has more childNode */
      let [fistGroup, secondGroup] = [g1.childNodes, g2.childNodes];
      if (g1.childNodes.length < g2.childNodes.length) {
        fistGroup = g2.childNodes;
        secondGroup = g1.childNodes;
      }

      let linePairs = [];
      for (let v1 of fistGroup) {
        for (let v2 of secondGroup) {
          linePairs.push({
            p1: {
              x: v1.$x(),
              y: v1.$y()
            },
            p2: {
              x: v2.$x(),
              y: v2.$y()
            }
          });
        }
      }

      if (visuals.svgNodes.length > linePairs.length) {
        throw new Error("$joinGroupItems: There are more visuals(" + visuals.svgNodes.length + ") than linePairs(" + linePairs.length + ")")
      }

      for (let index in visuals.svgNodes) {
        let v = visuals.svgNodes[index];
        let { p1, p2 } = linePairs[index];
        v.$path(p1, p2, isSmooth);
      }
    }
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = $arcIntentFn;
/* harmony export (immutable) */ __webpack_exports__["d"] = $arcRenderFn;
/* harmony export (immutable) */ __webpack_exports__["e"] = $arcRotateBy;
/* harmony export (immutable) */ __webpack_exports__["f"] = $arcSpanOffset;
/* harmony export (immutable) */ __webpack_exports__["g"] = $arcSpanUnit;
/* harmony export (immutable) */ __webpack_exports__["c"] = $arcRadiusOffset;
/* harmony export (immutable) */ __webpack_exports__["b"] = $arcRadius;

/**
  An Arc Intents lambda. THis allows developers to supply their own arcIntents.

  @function $arcIntentFn
  @param {Object} data - this will be passed to the callback lambda.
  @param {Function} callback - Lambda that accepts the intent itself - @{this},
  and the array of visuals - @{visuals.svgNodes}.

  @return {Object}

  Developers will need to:
    1.  Iterate over the array of visuals in the visuals.svgNodes array,
    2.  Apply their own custom intent logic to each visual,
    3.  Then either use the internal:
        A. __calcRenderData and their own custom render method, or
        B. __renderPath method which will render the path

    This lambda is called internally like this: callback(this, visuals.svgNodes)
*/
function $arcIntentFn(data, callback) {
  return {
    name: "arcIntentFn",
    data,
    action(visuals) {
      callback(this, visuals.svgNodes);
    } // action
  } // return
}

/**
  An Arc Intents lambda that called on each visual, before the renderPath is
  done.

  @function $arcRenderFn
  @param {Object} data - this will be passed to the callback lambda.
  @param {Function} callback - Callback function should accept three arguments:
    * The first, the intent itself -  @{this},
    * the current visual - @{v}.
    * the index of the current visual in the visuals.svgNodes - @{index},

    This allows developers to supply their own arcIntents, without the need to
    call the __renderPath.

    The lambda is called internally like this: fn(this, v, index);

  @return {Object}
*/
function $arcRenderFn(data, callback) {
  return {
    name: "arcRenderFn",
    data,
    action(visuals) {
      visuals.svgNodes.forEach((v, index) => {
        callback(this, v, index);
        v.__renderPath();
      })
    } // action
  } // return
}

/**
  Rotates each arc by the specified amount around the radius of the arc.

  @function $arcRotateBy
  @param {Number} data - the amount in degrees by which the arcs should be
    rotated. Positve numbers are clockwise, negative numbers are
    counter-clockwise.

  @return {Object}
*/
function $arcRotateBy(data) {
  return {
    name: "arcRotateBy",
    data,
    action(visuals) {
      let start = visuals.svgNodes[0].$startAngle()

      for (let v of visuals.svgNodes) {
        start = v.$startAngle() + this.data;
        v.$startAngle(start);
        v.__renderPath();
      }
    } // action
  } // return
}

/**
  An offest added between each subsequent arc. It changes the startAngle of
  subsequent arcs which creates a gap between each arc.

  @function $arcSpanOffset
  @param {Number} data - the gap added between each arc.

  @return {Object}

  Note:
    $arcSpanOffset not change the overall length of the arc, but it does alter
    the startAngle. The startAngle of the first arc remains unaffected.
*/
function $arcSpanOffset(data) {
  return {
    name: "arcSpanOffset",
    data,
    action(visuals) {
      let start = visuals.svgNodes[0].$startAngle();

      for (let v of visuals.svgNodes) {
        v.$startAngle(start);
        v.__renderPath();
        start = start + v.$arcSpan() + this.data;
      }
    } // action
  } // return
}

/**
  Determines the span of each arc based on the unit data (supplied in degrees).

  @function $arcSpanUnit
  @param {Number} data - the base unit (e.g. 60) All arcs will be a multiple of
  this base unit

  @return {Object}
*/
function $arcSpanUnit(data) {
  return {
    name: "arcSpanUnit",
    data,
    action(visuals) {
      for (let v of visuals.svgNodes) {
        v.$arcSpan(this.data * v._dataValue);
        v.__renderPath();
      }
    } // action
  } // return
}

/**
  Increments the radius of each subsequent arc.

  @function $arcRadiusOffset
  @param {Number} data - the offset to add to each arc's radius.

  @return {Object}

*/
function $arcRadiusOffset(data) {
  return {
    name: "arcRadiusOffset",
    data,
    action(visuals) {
      let x = visuals.svgNodes[0].$radius()

      for (let v of visuals.svgNodes) {
        v.$radius(x);
        v.__renderPath();
        x = x + this.data;
      }
    } // action
  } // return
}

/**
  Sets the radius each arc

  @function $arcRadius
  @param {Number} data - the radius of the arc

  @return {Object}

*/
function $arcRadius(data) {
  return {
    name: "radius",
    data,
    action(visuals) {
      for (let v of visuals.svgNodes) {
        v.$radius(this.data);
        v.__renderPath();
      }
    } // action
  } // return
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = $textSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = $rawDataValue;
/* harmony export (immutable) */ __webpack_exports__["a"] = $dataIndex;
/**
 * Sets the text-size value of the visuals
 * @function $textSize
 * @param {number} data
 * @param {number} xOffset
 * @param {number} yOffset
 * @return {Object} Intent meta-data
 */
function $textSize(data, xOffset = 0, yOffset = 0) {
    return {
        type: "effect",
        name: "data",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                v.$fontSize(this.data);
                v.$x(v.$x() + xOffset);
                v.$y(v.$y() + yOffset);
            });
        }
    };
}

/**
 * Sets the text value of the visuals based on the raw data value
 * @function $dataItem
 * @return {Object} Intent meta-data
 */
function $rawDataValue() {
    return {
        type: "effect",
        name: "data",
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                v.$text(v._rawDataValue);
            });
        }
    };
}

/**
 * Sets the text value of the visuals based index of the data value
 * @function $dataIndex
 * @param {number} offset
 * @return {Object} Intent meta-data
 */
function $dataIndex(offset = 0) {
    return {
        type: "effect",
        name: "data",
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                v.$text(v._dataIndex + offset);
            });
        }
    };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = $css;
/* harmony export (immutable) */ __webpack_exports__["a"] = $appendCSS;
/**
 * Sets the css class value of the visuals
 * @function $css
 * @param {number} data
 * @return {Object} Intent meta-data
 */
function $css(data) {
    return {
        type: "effect",
        name: "css",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                v.$class(this.data);
            });
        }
    };
}

/**
 * Appends the css class value to the existing values of the visuals
 * @function $appendCSS
 * @param {number} data
 * @return {Object} Intent meta-data
 */
function $appendCSS(data) {
    return {
        type: "effect",
        name: "appendCSS",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                v.$class(`${v.$class()} ${this.data}`);
            });
        }
    };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = $cx;
/* harmony export (immutable) */ __webpack_exports__["e"] = $cy;
/* harmony export (immutable) */ __webpack_exports__["j"] = $rx;
/* harmony export (immutable) */ __webpack_exports__["k"] = $ry;
/* harmony export (immutable) */ __webpack_exports__["d"] = $cxOffset;
/* harmony export (immutable) */ __webpack_exports__["g"] = $cyOffset;
/* harmony export (immutable) */ __webpack_exports__["c"] = $cxIncrement;
/* harmony export (immutable) */ __webpack_exports__["f"] = $cyIncrement;
/* harmony export (immutable) */ __webpack_exports__["a"] = $alignCYBottom;
/* harmony export (immutable) */ __webpack_exports__["h"] = $diameter;
/* harmony export (immutable) */ __webpack_exports__["i"] = $maxDiameter;
/**
 * Sets the cx value of the visuals
 * @function $cx
 * @param {Number} data - sets the $cx amount for the shape
 * @return {Object} Intent meta-data
 */
function $cx(data) {
    return {
        type: "effect",
        name: "cx",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                //   console.log('$rx requires dataProperty: "diameter"')
                //   return;
                // }
                v.$cx(this.data);
            });
        }
    };
}

/**
 * Sets the cy value of the visuals
 * @function $cy
 * @param {Number} data - sets the $cy amount for the shape
 * @return {Object} Intent meta-data
 */
function $cy(data) {
    return {
        type: "effect",
        name: "cy",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                //   console.log('$rx requires dataProperty: "diameter"')
                //   return;
                // }
                v.$cy(this.data);
            });
        }
    };
}

/**
 * Sets the rx value of the visuals
 * @function $rx
 * @param {Number} data - sets the $rx amount for the shape
 * @return {Object} Intent meta-data
 */
function $rx(data) {
    return {
        type: "effect",
        name: "rx",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                //   console.log('$rx requires dataProperty: "diameter"')
                //   return;
                // }
                v.$rx(this.data);
            });
        }
    };
}

/**
 * Sets the ry value of the visuals
 * @function $ry
 * @param {Number} data - the $ry amount
 * @return {Object} Intent meta-data
 */
function $ry(data) {
    return {
        type: "effect",
        name: "ry",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                // console.log('$ry requires dataProperty: "diameter"')
                // return;
                // }
                v.$ry(this.data);
            });
        }
    };
}

/**
 * Sets the horizontal offset of the ellipses.
 * @function $cxOffset
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $cxOffset(data) {
    return {
        type: "effect",
        name: "cxOffset",
        data,
        action(visuals) {
            let x = visuals.svgNodes[0].$cx()
            for (let v of visuals.svgNodes) {
                // if (v._dataProperty != "diameter") {
                // console.log('$rxOffset requires dataProperty: "diameter"')
                // return;
                // }
                v.$cx(x + v.$rx());
                x = x + this.data + v.$rx() * 2.0
            }
        }
    };
}

/**
 * Sets the vertical offset of the ellipses.
 *
 * @function $cyOffset
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $cyOffset(data) {
    return {
        type: "effect",
        name: "cyOffset",
        data,
        action(visuals) {
            let y = visuals.svgNodes[0].$cy();

            for (let v of visuals.svgNodes) {
                // if (v._dataProperty != "diameter") {
                // console.log('$ryOffset requires dataProperty: "diameter"')
                // return;
                // }
                v.$cy(y + v.$ry());
                y = y + this.data + v.$ry() * 2.0;
            }
        }
    };
}

/**
 * Sets the cx-distance between the visuals
 * Is independent of the width of the visual
 * @function $cxIncrement
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $cxIncrement(data) {
    return {
        type: "effect",
        name: "cxIncrement",
        data,
        action(visuals) {
            let [first, ...rest] = visuals.svgNodes;
            let x = first.$cx() + this.data;

            rest.forEach(v => {
                v.$cx(x);
                x = x + this.data;
            });
        }
    };
}

/**
 * Sets the cy-distance between the visuals
 * Is independent of the width of the visual
 * @function $cxIncrement
 * @param {Number} data
 * @return {Object} Intent meta-data
 */
function $cyIncrement(data) {
    return {
        type: "effect",
        name: "cyIncrement",
        data,
        action(visuals) {
            let [first, ...rest] = visuals.svgNodes;
            let y = first.$cy() + this.data;

            rest.forEach(v => {
                v.$cy(y);
                y = y + this.data;
            });
        }
    };
}

/**
 * Aligns all visuals along the bottom of the "y-axis".
 *
 * @function $alignCYBottom
 * @param {number} cyBaseline - an optional yBaseline that is used to determine the position the
 * visuals. If this value is not supplied, then the visuals.__data.max() is used.
 * @return {Object} Intent meta-data
 */
function $alignCYBottom(cyBaseline) {
    return {
        type: "effect",
        name: "alignCYBottom",
        action(visuals) {
            let baselineValue = cyBaseline || visuals.__data.max();

            for (let v of visuals.svgNodes) {
                //   if ($isTruthy(v.$cy())) {
                v.$cy(baselineValue - v.$cy());
                //   }
            }
        }
    }
}

/**
 * Sets the width and height.
 *
 * @function $diameter
 * @param {Number} data - the maximum width and height to which visuals will be scaled
 * @return {Object} Intent meta-data
 */
function $diameter(data) {
    return {
        type: "effect",
        name: "diameter",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                // console.log('$maxDiameter requires dataProperty: "diameter"')
                // return;
                // }
                let dd = this.data / 2.0;
                // let d = this.data * dd;
                v.$height(dd)
                v.$width(dd)
            })
        }
    };
}

/**
 * Scales the width and height based on the value of the largest ellipse.
 * This is constrained to data with the diameter targetAttr.
 *
 * @function $maxDiameter
 * @param {Number} data - the maximum width and height to which visuals will be scaled
 * @return {Object} Intent meta-data
 */
function $maxDiameter(data) {
    return {
        type: "effect",
        name: "maxDiameter",
        data,
        action(visuals) {
            visuals.svgNodes.forEach(v => {
                // if (v._dataProperty != "diameter") {
                // console.log('$maxDiameter requires dataProperty: "diameter"')
                // return;
                // }
                let dd = v._dataValue / 2.0;
                let d = this.data * dd;
                v.$height(d)
                v.$width(d)
            })
        }
    };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __$visuals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ancui_core_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ancui_core_rect_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ancui_core_connected_points_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ancui_pipeline_js__ = __webpack_require__(7);








let __$visuals = Object(__WEBPACK_IMPORTED_MODULE_3__ancui_pipeline_js__["c" /* getVisuals */])();
/**
  An empty, noop visual.

  @method empty

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.empty = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return {};
    });
}

// __$visuals.globalSettings = function (effectsArray) {
//   return this.registerGlobalSetting(effectsArray, (container) => {
//     return {};
//   });
// }

__$visuals.label = function (textContent, effectsArray) {
  let visual = this.createVisual()

  visual.withCreateShapesCallback(visual.__defaultSingleShapeCreator)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["o" /* text */])(container)
        .$x(0)
        .$y(0)
        .$text(textContent)
        .$class("text label");
    });

  return visual
}

__$visuals.labels = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["o" /* text */])(container)
        .$x(0)
        .$y(0)
        .$class("text labels");
    });
}

/**
  Describes the bar visuals.

  @method bars

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
 */
__$visuals.bars = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_1__ancui_core_rect_js__["a" /* rect */])(container)
        .$x(0)
        .$y(0)
        .$width(0)
        .$height(0)
        .$class("bar");
    });
}

/**
  Describes the ellipse visuals.

  @method ellipses

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.ellipses = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["j" /* ellipse */])(container)
        .$x(0)
        .$y(0)
        .$class("ellipse");
    });
}

/**
  Creates a series of lines that's connected to other visuals.

  @method connectingLines

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.connectingLines = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["n" /* path */])(container)
        .$class("path");
    });
}

/**
  Creates a series of disjoint arcs.

  @method arcs

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.arcs = function (data, effectsArray) {
  return this.createVisual()
    .withData(data)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["h" /* arc */])(container)
        .$class("arc");
    });
}

/**
  Creates a series of lines.

  @method lines

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.lines = function (data, effectsArray) {
  let visual = this.createVisual();

  visual.withCreateShapesCallback(vis => { // vis is an alias for the visual
    // console.log("sssss", vis.__data)
    let pairs = [];
    let currentPair = [];

    if (vis.__data.activeDataItems().length <= 1) {
      return
    }

    vis.__data.activeDataItems().forEach((d, index) => {
      let pairData = {
        d: d,
        index: index,
        rawValue: vis.__data.rawDataItem(index),
        _dataProperty: vis.__data.target,
      };
      currentPair.push(pairData)

      if (currentPair.length == 2) {
        pairs.push(currentPair)
        currentPair = []
        currentPair.push(pairData)
      }
    });

    pairs.forEach((pair, index) => {
      // console.log("xxx>")
      let svgShape = vis.__createSVGShapeCallback(__$visuals.currentContainer, pair);
      // console.log("xxx<")
      vis.__saveSVGShape(svgShape);
      vis.__saveSVGShapeData(svgShape, index, pair, [pair.rawValue, pair.rawValue]);
    });
  });

  visual.withData(data)
    .registerVisual(effectsArray, (container, _d) => {
      return Object(__WEBPACK_IMPORTED_MODULE_2__ancui_core_connected_points_js__["a" /* connectedPoints */])(container, _d)
        .$x(0)
        .$y(0)
        .$class("line");
    });

  return visual;
}

/**
  Creates a horizontal line visual.

  @method hLine

  @param {Object} data
  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.hLine = function (effectsArray) {
  let visual = this.createVisual()

  visual.withCreateShapesCallback(visual.__defaultSingleShapeCreator)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["l" /* hLine */])(container)
        .$x(0)
        .$y(0)
        .$class("line");
    });

  return visual;
}

/**
  Creates a vertical line visual.

  @method hLine

  @param {Array} effectsArray - array of intents

  @return {Object}
*/
__$visuals.vLine = function (effectsArray) {
  let visual = this.createVisual()

  visual.withCreateShapesCallback(visual.__defaultSingleShapeCreator)
    .registerVisual(effectsArray, (container) => {
      return Object(__WEBPACK_IMPORTED_MODULE_0__ancui_core_js__["p" /* vLine */])(container)
        .$x(0)
        .$y(0)
        .$class("line");
    });

  return visual;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worksheet", function() { return worksheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anemic_components_lib_ancui_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anemic_components_lib_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_d3_fetch_dist_d3_fetch_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_d3_fetch_dist_d3_fetch_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_d3_fetch_dist_d3_fetch_js__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d3", function() { return __WEBPACK_IMPORTED_MODULE_2__node_modules_d3_fetch_dist_d3_fetch_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ancui", function() { return __WEBPACK_IMPORTED_MODULE_0__anemic_components_lib_ancui_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_1__anemic_components_lib_utils_js__; });




let worksheet = [];


const urlParams = new URLSearchParams(window.location.search);
// const teamId = urlParams.get('team');
const pathnameParts = window.location.pathname.split("/")

const teamId = pathnameParts[pathnameParts.length - 1]

console.log("teamId", teamId)
__WEBPACK_IMPORTED_MODULE_2__node_modules_d3_fetch_dist_d3_fetch_js__["csv"](`/f/${teamId}`).then(function (data) {
    worksheet = data;
    app.boot()
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-fetch/ v1.1.2 Copyright 2018 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(18)) :
typeof define === 'function' && define.amd ? define(['exports', 'd3-dsv'], factory) :
(factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Dsv) { 'use strict';

function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

function blob(input, init) {
  return fetch(input, init).then(responseBlob);
}

function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

function buffer(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
}

function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

function text(input, init) {
  return fetch(input, init).then(responseText);
}

function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return text(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = d3Dsv.dsvFormat(delimiter);
  return text(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(d3Dsv.csvParse);
var tsv = dsvParse(d3Dsv.tsvParse);

function image(input, init) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    for (var key in init) image[key] = init[key];
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = input;
  });
}

function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.json();
}

function json(input, init) {
  return fetch(input, init).then(responseJson);
}

function parser(type) {
  return function(input, init)  {
    return text(input, init).then(function(text$$1) {
      return (new DOMParser).parseFromString(text$$1, type);
    });
  };
}

var xml = parser("application/xml");

var html = parser("text/html");

var svg = parser("image/svg+xml");

exports.blob = blob;
exports.buffer = buffer;
exports.dsv = dsv;
exports.csv = csv;
exports.tsv = tsv;
exports.image = image;
exports.json = json;
exports.text = text;
exports.xml = xml;
exports.html = html;
exports.svg = svg;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__dsv__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tsv__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoType__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return __WEBPACK_IMPORTED_MODULE_3__autoType__["a"]; });






/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return csvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return csvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(2);


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tsvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tsvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(2);


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autoType;
function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(), number;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number = +value)) value = number;
    else if (/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(value)) value = new Date(value);
    else continue;
    object[key] = value;
  }
  return object;
}


/***/ })
/******/ ]);