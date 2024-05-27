import React from 'react';
import DistributorSidebar from '../component/DistributorSidebar.tsx';
import '../styles/HomePage.css';
import { PageHeader } from "../component/PageHeader.tsx";

const AllRetailersPage: React.FC = () => {
  return (
    <div className="homepage-background flex flex-col min-h-screen">
      <PageHeader />
      <div className="flex flex-1">
        <DistributorSidebar />
        <div className="flex-1 p-8 ml-64">
          <h1>Welcome, Distributor!</h1>
          {/* Distributor-specific content goes here */}
        </div>
      </div>
    </div>
  );
};

export default AllRetailersPage;
