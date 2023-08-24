import { useState, useMemo } from 'react';
/**
 * const [state, {action, setLeft, setRight}] = useToggle() radio
 */
type defaultFn = () => void;

export interface Actions<T> {
  toggle: defaultFn;
  setLeft: defaultFn;
  setRight: defaultFn;
  set: (T) => void;
}

function useToggle<T, U>(defaultValue: T = false as T, reverseValue?: U): [T | U, Actions<T | U>] {
  const [state, setState] = useState<T | U>(defaultValue);

  const originReverseValue = reverseValue === undefined ? !defaultValue : reverseValue;

  const actions = useMemo(() => {
    const toggle = () =>
      setState((val: T | U) => (val === defaultValue ? originReverseValue : defaultValue));
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(originReverseValue);
    const set = (val: T | U) => setState(val);
    return {
      toggle,
      setLeft,
      setRight,
      set,
    };
  });

  return [state, actions];
}

export default useToggle;
