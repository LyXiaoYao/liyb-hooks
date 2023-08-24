import { __read } from "tslib";
import { useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var originReverseValue = reverseValue === undefined ? !defaultValue : reverseValue;
  var actions = useMemo(function () {
    var toggle = function () {
      return setState(function (val) {
        return val === defaultValue ? originReverseValue : defaultValue;
      });
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(originReverseValue);
    };
    var set = function (val) {
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
export default useToggle;