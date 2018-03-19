// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array                    = require("bs-platform/lib/js/array.js");
var Hashtbl                    = require("bs-platform/lib/js/hashtbl.js");
var Pervasives                 = require("bs-platform/lib/js/pervasives.js");
var Easy$ReactTemplate         = require("./Boards/Easy.bs.js");
var Intermediate$ReactTemplate = require("./Boards/Intermediate.bs.js");

var values = Hashtbl.create(/* None */0, 1);

Hashtbl.add(values, "Easy", Easy$ReactTemplate.one);

Hashtbl.add(values, "Intermediate", Intermediate$ReactTemplate.one);

function generateInitialBoard(startingBoard) {
  var board = /* array */[];
  for(var i = 0; i <= 8; ++i){
    var row = /* int array */[];
    for(var j = 0; j <= 8; ++j){
      var key = Pervasives.string_of_int(i) + ("-" + Pervasives.string_of_int(j));
      row = Hashtbl.mem(startingBoard, key) ? $$Array.append(row, /* int array */[Hashtbl.find(startingBoard, key)]) : $$Array.append(row, /* int array */[0]);
    }
    board = $$Array.append(board, /* array */[row]);
  }
  return board;
}

var boards = values;

exports.boards               = boards;
exports.generateInitialBoard = generateInitialBoard;
/* values Not a pure module */
