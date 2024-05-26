import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import SignUpPage from "./components/pages/SignUpPage.tsx";
import LogInPage from "./components/pages/LogInPage.tsx";
import InfoPage from "./components/pages/InfoPage.tsx";
import Homepage from "./components/pages/Homepage.tsx";
import AllUsersPage from "./components/pages/AllUsersPage.tsx"; // New component
import AddAUserPage from "./components/pages/AddAUserPage.tsx"; // New component
//import ProtectedTemplate from "./components/pages/ProtectedTemplate";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user-info" element={<InfoPage />} />
          <Route
            path="/homepage"
            element={
              //<ProtectedTemplate>
                <Homepage />
              //</ProtectedTemplate>
            }
          />
          <Route path="/all-users" element={<AllUsersPage />} /> 
          <Route path="/add-user" element={<AddAUserPage />} /> 
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

//<Route path="/" element={<Navigate to="/homepage" />} />
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<LogInPage />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/user-info" element={<InfoPage />} />
//           <Route path="/homepage" element={<Homepage/>} />
//           <Route path="/" element={<Navigate to="/homepage" />} />
//         </Routes>
//       </BrowserRouter>
//     </ClerkProvider>
//   </React.StrictMode>