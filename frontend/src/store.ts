import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from 'react-redux';
type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

//infer the `RootState` and `AppDispatch` types from the store itself
export const useAppDispatch: () => typeof store.dispatch =
	useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
	useSelector;
