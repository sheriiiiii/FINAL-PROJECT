import React from 'react';
import RetailerSidebar from '../component/RetailerSidebar.tsx';
import '../styles/HomePage.css';
import { PageHeader } from "../component/PageHeader.tsx";

const CreditBalancePage: React.FC = () => {
  return (
    <div className="homepage-background flex flex-col min-h-screen">
      <PageHeader />
      <div className="flex flex-1">
        <RetailerSidebar />
        <div className="flex-1 p-8 ml-64">
          <h1>Welcome, Retailer!</h1>
          {/* Retailer-specific content goes here */}
        </div>
      </div>
    </div>
  );
};

export default CreditBalancePage;
