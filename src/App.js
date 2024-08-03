import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHome from "./pages/dashboard/DashboardHome";
import GetCompany from "./pages/dashboard/GetCompany";
import Profile from "./pages/dashboard/Profile";
import EditProfile from "./pages/dashboard/EditProfile";
import Comanies from "./pages/Comanies";
import CompanyDetail from "./pages/CompanyDetail";
import Partnership from "./pages/dashboard/Partnership";
import Chat from "./pages/dashboard/Chat";
import { SocketProvider } from "./context/socket";
import Home from "./pages/Home";
import GlobalStorage from "./Storage/ContextProvider";
import { getCookie } from "./auth/helper";
import { useContext, useEffect } from "react";
import axios from "axios";
import BASE_URL from "./baseUrl";
import CompanyLists from "./pages/CompanyLists";
import UserDashboard from "./pages/UserDashboard";
import AboutPage from "./pages/About";
function App() {



  
  return (
    <>
      <ToastContainer />
      {/* <SocketProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<CompanyLists />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/dashboard" element={<EditProfile />} />
            {/* <Route path="/dashboard/getCompany" element={<GetCompany />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/edit-profile" element={<EditProfile />} />
            <Route path="/dashboard/partnership" element={<Partnership />} />
            <Route path="/dashboard/chat" element={<Chat />} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
          </Routes>
        </BrowserRouter>
      {/* </SocketProvider> */}
    </>
  );
}

export default App;
