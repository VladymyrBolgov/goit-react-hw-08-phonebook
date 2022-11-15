import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { persistedReducer } from './contactsSlice';
import { filterReducer } from "./filterSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";


export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),

  ],
});

export const persistor = persistStore(store);
