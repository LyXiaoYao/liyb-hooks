"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var originReverseValue = reverseValue === undefined ? !defaultValue : reverseValue;
  var actions = (0, _react.useMemo)(function () {
    var toggle = function toggle() {
      return setState(function (val) {
        return val === defaultValue ? originReverseValue : defaultValue;
      });
    };
    var setLeft = function setLeft() {
      return setState(defaultValue);
    };
    var setRight = function setRight() {
      return setState(originReverseValue);
    };
    var set = function set(val) {
      return setState(val);
    };
    return {
      toggle: toggle,
      setLeft: setLeft,
      setRight: setRight,
      set: set
    };
  });
  return [state, actions];
}
var _default = useToggle;
exports.default = _default;