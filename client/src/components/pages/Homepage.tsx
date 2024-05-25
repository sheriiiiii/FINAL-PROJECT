import React from "react";
//import ProtectedTemplate from "./ProtectedTemplate.tsx";
import Sidebar from '../component/Sidebar.tsx';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
    return (
      //<ProtectedTemplate>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-8">
            <h1 className="text-4xl font-bold">Home</h1>
          </div>
        </div>
      //</ProtectedTemplate>
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