import {
  TypedUseSelectorHook,
  useDispatch as useUntypedDispatch,
  useSelector as useUntypedSelector,
} from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
import type { RootState, AppDispatch } from '../store';

export const useDispatch = () => useUntypedDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;
