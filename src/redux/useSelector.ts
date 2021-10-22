import { useSelector as useMySelector, TypedUseSelectorHook } from 'react-redux'
import { MyState } from './myReducer';

// export function useSelector<T = any>(fn: (state: MyState) => T) {
//   return useMySelector<MyState, T>(fn)
// }

export const useSelector: TypedUseSelectorHook<MyState> = useMySelector;