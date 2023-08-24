import { renderHook, act } from '@testing-library/react';

import useToggle from '..';

const callAction = {
  toggle: (hook) => act(() => hook.result.current[1].toggle()),
  setLeft: (hook) => act(() => hook.result.current[1].setLeft()),
  setRight: (hook) => act(() => hook.result.current[1].setRight()),
};

describe('useToggle test', () => {
  it('测试默认不传值执行', () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
    callAction.toggle(hook);
    expect(hook.result.current[0]).toBeTruthy();
  });

  it('测试传值', () => {
    const hook = renderHook(() => useToggle('male', 'femal'));
    expect(hook.result.current[0]).toBe('male');
    callAction.toggle(hook);
    expect(hook.result.current[0]).toBe('femal');
    callAction.setLeft(hook);
    expect(hook.result.current[0]).toBe('male');
    callAction.setRight(hook);
    expect(hook.result.current[0]).toBe('femal');
  });
});
