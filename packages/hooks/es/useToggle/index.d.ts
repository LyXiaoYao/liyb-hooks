/**
 * const [state, {action, setLeft, setRight}] = useToggle() radio
 */
type defaultFn = () => void;
export interface Actions<T> {
    toggle: defaultFn;
    setLeft: defaultFn;
    setRight: defaultFn;
    set: (T: any) => void;
}
declare function useToggle<T, U>(defaultValue?: T, reverseValue?: U): [T | U, Actions<T | U>];
export default useToggle;
