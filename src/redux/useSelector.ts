import { useSelector as useMySelector } from 'react-redux'
import { MyState } from './myReducer';

export function useSelector<T = any>(fn: (state: MyState) => T) {
  return useMySelector<MyState, T>(fn)
}
