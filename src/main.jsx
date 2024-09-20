import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {persistor, store} from "./redux/store.js";
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {PersistGate} from "redux-persist/lib/integration/react.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
