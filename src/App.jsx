import {Route, Routes} from "react-router-dom";
import EventsPage from "./pages/EventsPage/EventsPage";
import ParticipantPage from "./pages/ParticipantPage/ParticipantPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/participants" element={<ParticipantPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
