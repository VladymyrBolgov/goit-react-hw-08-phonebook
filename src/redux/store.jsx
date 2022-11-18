import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { persistedReducer } from './contactsSlice';
import { filterReducer } from "./filterSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: persistedReducer,
    filter: filterReducer,
    
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
