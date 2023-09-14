import { io } from "socket.io-client";
import axios from "axios";
import { useEffect } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Otp from "./components/auth/Otp";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";
import Applay from "./components/Applay";
import SingleLawyer from "./components/SingleLawyer";
import Lawyers from "./components/Lawyers";
import VideoMeeting from "./components/VideoMeeting";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  secure: true,
});

function App() {
  axios.defaults.withCredentials = true;

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const OnboardLayout = () => {
    return (
      <div className="bg-emerald-500 h-screen w-screen">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Otp />,
    },
    {
      path: "/onboarding",
      element: <OnboardLayout />,
      children: [
        { path: "/onboarding/register", element: <Register /> },
        {
          path: "/onboarding/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/applay-advocate", element: <Applay /> },
        {
          path: "/lawyers",
          element: <Lawyers />,
        },
        {
          path: "/SingleLawyer/:id",
          element: <SingleLawyer />,
        },
      ],
    },
    {
      path: "/video",
      element: <VideoMeeting />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
