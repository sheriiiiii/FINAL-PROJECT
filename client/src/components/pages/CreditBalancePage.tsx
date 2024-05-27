import React from 'react';
import RetailerSidebar from '../component/RetailerSidebar.tsx';
import '../styles/HomePage.css';
import { PageHeader } from "../component/PageHeader.tsx";
import PurchaseCredit from '../component/PurchaseCredit.tsx';

const CreditBalancePage: React.FC = () => {
  return (
    <div className="homepage-background flex flex-col min-h-screen">
      <PageHeader />
      <div className="flex flex-1">
        <RetailerSidebar />
        <div className="flex-1 p-8 ml-64">
          <PurchaseCredit />
        </div>
      </div>
    </div>
  );
};

export default CreditBalancePage;
