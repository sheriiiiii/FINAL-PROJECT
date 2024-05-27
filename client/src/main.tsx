import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import SignUpPage from "./components/pages/SignUpPage.tsx";
import LogInPage from "./components/pages/LogInPage.tsx";
import InfoPage from "./components/pages/InfoPage.tsx";
import Homepage from "./components/pages/Homepage.tsx";
import AllUsersPage from "./components/pages/AllUsersPage.tsx"; 
import AddAUserPage from "./components/pages/AddAUserPage.tsx"; 
import RetailerHomePage from "./components/pages/RetailerHomepage.tsx";
import DistributorHomePage from "./components/pages/DistributorHomepage.tsx";
//import EditProfilePage from "./components/pages/EditProfilePage.tsx";
//import ProtectedTemplate from "./components/pages/ProtectedTemplate";
import CreditBalancePage from "./components/pages/CreditBalancePage.tsx";
import IMSICreditsPage from "./components/pages/IMSICreditsPage.tsx";
import ApplicationRequestPage from "./components/pages/ApplicationRequestPage.tsx";
import AllRetailersPage from "./components/pages/AllRetailersPage.tsx";

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
          <Route path="/retailer-homepage" element={<RetailerHomePage />} /> 
          <Route path="/distributor-homepage" element={<DistributorHomePage />} /> 
          <Route path="/pay-credit-balance" element={<CreditBalancePage />} /> 
          <Route path="/manage-imsi-credits" element={<IMSICreditsPage />} /> 
          <Route path="/application-request" element={<ApplicationRequestPage />} /> 
          <Route path="/all-retailers" element={<AllRetailersPage />} /> 
         {/*<Route path="/edit-profile" element={<EditProfilePage />} />*/}
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