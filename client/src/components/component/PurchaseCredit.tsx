import React, { useState } from 'react';
import '../styles/PurchaseCredit.css';

const PurchaseCredit: React.FC = () => {
    const [formData, setFormData] = useState({
        retailerName: '',
        creditAmount: '',
        paymentMethod: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
      };
    
      return (
        <form className="credit-balance-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Purchase Credit Balance</h2>
          
          <label className="form-label">
            Retailer Name
            <input
              type="text"
              name="retailerName"
              value={formData.retailerName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          
          <label className="form-label">
            Credit Amount
            <input
              type="number"
              name="creditAmount"
              value={formData.creditAmount}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          
          <label className="form-label">
            Payment Method
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="" disabled>Select payment method</option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="cash">Cash</option>  
              <option value="credit-card">Credit Card</option>
              <option value="gcash">GCash</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      );
};

export default PurchaseCredit;
