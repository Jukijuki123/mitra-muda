import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout"; // Layout dengan Navbar dan Footer
import PrivateLayout from "../layouts/PrivateLayout"; // Layout untuk halaman yang butuh login
import { isAuthenticated } from "../utils/auth";
// Import halaman publik
import Landing from "../pages/publicPage/Landing";
import Login from "../pages/publicPage/Login";
import Register from "../pages/publicPage/Register";
// Import halaman privat
import Dashboard from "../pages/private/Dashboard";
import IdeaBoard from "../pages/private/IdeaBoard";
import Tantangan from "../pages/private/Tantangan";
import Kolaborasi from "../pages/private/Kolaborasi";
import IdeaDetail from "../pages/private/IdeaDetail";
import CreateIdea from "../pages/private/CreateIdea";
import CollaborationRequest from "../pages/private/CollaborationRequest";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* 1. Rute Publik dengan PublicLayout */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Landing />} />
                </Route>

                {/* 2. Rute Otentikasi Tanpa Layout */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* 3. Rute Private dengan Auth Guard */}
                <Route element={<PrivateLayout />}>
                    <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/ideaBoard" element={isAuthenticated() ? <IdeaBoard /> : <Navigate to="/login" />} />
                    <Route path="/kolaborasi" element={isAuthenticated() ? <Kolaborasi /> : <Navigate to="/login" />} />
                    <Route path="/tantangan" element={isAuthenticated() ? <Tantangan /> : <Navigate to="/login" />} />
                    <Route path="/ideas/:id" element={<IdeaDetail />} />
                    <Route path="/ideas/create" element={<CreateIdea />} />
                    <Route path="/collaborations" element={<CollaborationRequest />} />
                </Route>
            </Routes>
        </Router>
    );
}