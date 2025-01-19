import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Campaign from "./pages/Campaign";
import Lists from "./pages/Lists";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/discover" />}
        />

        <Route
          path="/discover"
          element={<Dashboard />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
          path="/campaigns"
          element={<Campaign />}
        />
        <Route
          path="/list"
          element={<Lists />}
        />
        <Route
          path="/chat"
          element={<Chat />}
        />
        <Route
          path="/settings"
          element={<Setting />}
        />
      </Routes>
    </Router>
  );
}

export default App;
