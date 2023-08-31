import React from 'react';
import useBoolean from '..';
export default () => {
  const [state, actions] = useBoolean();
  return (
    <>
      <p>{state ? '开启' : '关闭'}</p>
      <button onClick={actions.toggle}>{state ? '关闭' : '开启'}</button>
    </>
  );
};
