import { useEffect } from 'react';
// 1.实现更新title
// 2.组件使用完成后，恢复本身的页面标题

import { useRef } from 'react';
const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
};

type Fn = () => void;

// 解决闭包问题
const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

const useUnmount = (fn: Fn) => {
  useEffect(() => {
    return () => fn();
  }, []);
  // useEffect(()=>{
  // return cb
  // },[])
};

function useTitle(title: string, options = DEFAULT_OPTIONS) {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useUnmount(() => {
    if (options.restorePrevTitle) {
      document.title = titleRef.current;
    }
  });
}

export default useTitle;
