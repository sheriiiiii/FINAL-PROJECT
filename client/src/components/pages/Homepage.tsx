import React from "react";
//import ProtectedTemplate from "./ProtectedTemplate.tsx";
import Sidebar from "../component/Sidebar.tsx";
import "../styles/HomePage.css";
import { PageHeader } from "../component/PageHeader.tsx";

const HomePage: React.FC = () => {
  return (
    // <ProtectedTemplate>
    <div className="homepage-background flex flex-col min-h-screen">
      <PageHeader />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8 ml-64">
          {/* Content of the home page goes here */}
        </div>
      </div>
    </div>
    // </ProtectedTemplate>
  );
};

export default HomePage;

// const Homepage: React.FC = () => {
//     return (
//       //<ProtectedTemplate>
//         <div className="page">
//           <Sidebar />
//           <div className="content">
//             <h1>Home</h1>
//           </div>
//         </div>
//       //</ProtectedTemplate>
//     );
//   };

//export default Homepage;
