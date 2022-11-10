import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { persistedReducer } from './contactsSlice';
import { filterReducer } from "./filterSlice";


export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
