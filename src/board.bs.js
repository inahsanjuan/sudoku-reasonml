// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array                    = require("bs-platform/lib/js/array.js");
var React                      = require("react");
var Pervasives                 = require("bs-platform/lib/js/pervasives.js");
var ReasonReact                = require("reason-react/src/ReasonReact.js");
var Row$ReactTemplate          = require("./Row.bs.js");
var BoardHeading$ReactTemplate = require("./BoardHeading.bs.js");

var component = ReasonReact.statelessComponent("Board");

var style = {
  border: "4px solid #292F36"
};

function make(board, handleChange, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, BoardHeading$ReactTemplate.make(/* array */[])), React.createElement("div", {
                      style: style
                    }, $$Array.mapi((function (index, row) {
                            return ReasonReact.element(/* Some */[Pervasives.string_of_int(index)], /* None */0, Row$ReactTemplate.make(handleChange, index, row, /* array */[]));
                          }), board)));
    });
  return newrecord;
}

exports.component = component;
exports.style     = style;
exports.make      = make;
/* component Not a pure module */
