import {Navigate, Route, Routes} from "react-router-dom";
import EventsPage from "./pages/EventsPage/EventsPage";
import ParticipantPage from "./pages/ParticipantPage/ParticipantPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/events" element={<Layout />}>
        <Route index element={<EventsPage />} />
        <Route path="/events/:id/participants" element={<ParticipantPage />} />
        <Route path="/events/:id/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/events" replace />} />
    </Routes>
  );
}

export default App;
