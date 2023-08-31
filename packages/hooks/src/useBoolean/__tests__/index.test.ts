import { renderHook, act } from '@testing-library/react';

import useBoolean from '..';

describe('useBoolean test', () => {
  it('base test', () => {
    const hook = renderHook(() => useBoolean(true));
    expect(hook.result.current[0]).toBeTruthy();

    act(() => hook.result.current[1].toggle());
    expect(hook.result.current[0]).toBeFalsy();
  });
});
