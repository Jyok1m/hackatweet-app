import "../styles/globals.css";
import Head from "next/head";

// Import store modules:
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeUser from "../reducers/activeUser";
//TODO import user from "../reducers/user";

// Import store persistance modules:
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

// Define reducers:
const reducers = combineReducers({ activeUser }); //TODO add reducer name

// Define a storage key name:
const persistConfig = { key: "Hackatweet", storage };

// Configure the store:
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Make the store persistant:
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
