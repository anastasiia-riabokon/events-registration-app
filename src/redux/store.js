import {configureStore} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {PersistGate} from "redux-persist/integration/react";

import {eventsReducer} from "./events/slice";
import {participantsReducer} from "./participants/slice";
import {themeReducer} from "./theme/slice";

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};

const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
    theme: themePersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
