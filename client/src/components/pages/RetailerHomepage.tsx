import React from 'react';
import Sidebar from '../component/Sidebar.tsx';
import '../styles/HomePage.css';
import { PageHeader } from "../component/PageHeader.tsx";

const RetailerHomePage: React.FC = () => {
  return (
    <div className="homepage-background flex flex-col min-h-screen">
      <PageHeader />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8 ml-64">
          <h1>Welcome, Retailer!</h1>
          {/* Retailer-specific content goes here */}
        </div>
      </div>
    </div>
  );
};

export default RetailerHomePage;
