import { useToggle } from 'liyb-hooks';
import { Actions } from '../useToggle';
function useBoolean(defaultValue: boolean = false): [boolean, Actions<boolean>] {
  const [state, actions] = useToggle<boolean, boolean>(defaultValue);

  return [state, actions];
}

export default useBoolean;
