import {Navigate, Route, Routes} from "react-router-dom";
import {Suspense, lazy} from "react";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const EventsPage = lazy(() => import("./pages/EventsPage/EventsPage"));
const ParticipantPage = lazy(() => import("./pages/ParticipantPage/ParticipantPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/events" element={<Layout />}>
          <Route index element={<EventsPage />} />
          <Route path="/events/:id/participants" element={<ParticipantPage />} />
          <Route path="/events/:id/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
