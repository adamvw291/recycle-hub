// src/components/UserProfilePage.jsx
import React from 'react';
import Navbar from './Navbar'; // Reuse the existing Navbar

const UserProfilePage = () => {
  // Dummy data based on the image
  const userInfo = [
    { label: 'NAME', value: 'JOHN DOE' },
    { label: 'EMAIL', value: 'johndoe@gmail.com' },
    { label: 'PHONE', value: '+12 34567890' },
    { label: 'BIRTHDAY', value: '12/03/25' },
  ];

  const addresses = [
    { label: 'HOME', value: '1234 F. JOHN DOE' },
    { label: 'WORK', value: '1234 F. JOHN DOE' },
    { label: 'OTHER', value: '1234 F. JOHN DOE' },
  ];

  const privacy = [
    { label: 'PASSKEY', value: '**************' },
    { label: 'PASSWORD', value: '*****', subtext: 'Last changed since...' },
  ];

  const transactions = [
    { details: '1 KG FOR 10 PHP', date: '05/12/2025' },
    { details: '1 KG FOR 10 PHP', date: '05/12/2025' },
    { details: '1 KG FOR 10 PHP', date: '05/12/2025' },
  ];

  const accounts = [
    { name: 'GCASH', number: '+12 34567890', ref: '' },
    { name: 'MAYA', number: '+12 34567890', ref: '' },
    { name: 'EAST WEST', number: '1234567890', ref: 'NEE E10' },
  ];

  return (
    <>
      <Navbar />
      <div className="profile-header-banner">
        USER MANAGEMENT PAGE
      </div>
      <div className="profile-container">
        <div className="profile-details-section">
          <div className="profile-avatar-placeholder">
            {/* Image Placeholder */}
          </div>
          <h2 className="profile-welcome-text">Welcome John Doe!</h2>
        </div>

        <div className="profile-main-grid">
          {/* LEFT PANEL: User Info */}
          <div className="user-info-panel">
            
            {/* USER INFO GROUP */}
            <div className="info-group">
              <div className="info-group-title">USER INFO</div>
              {userInfo.map((item, index) => (
                <div key={`user-${index}`} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* ADDRESSES GROUP */}
            <div className="info-group">
              <div className="info-group-title">ADDRESSES</div>
              {addresses.map((item, index) => (
                <div key={`address-${index}`} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* PRIVACY GROUP */}
            <div className="info-group">
              <div className="info-group-title">PRIVACY</div>
              {privacy.map((item, index) => (
                <div key={`privacy-${index}`} className="info-item">
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">
                    {item.value}
                    {item.subtext && <div className="privacy-text">{item.subtext}</div>}
                  </span>
                </div>
              ))}
            </div>
            <button className="panel-button edit">EDIT</button>
          </div>

          {/* RIGHT PANELS: Transaction History & Connected Accounts */}
          <div className="transaction-accounts-panel">
            
            {/* TRANSACTION HISTORY */}
            <div className="transaction-panel">
              <div className="panel-title">TRANSACTION HISTORY</div>
              {transactions.map((t, index) => (
                <div key={`transaction-${index}`} className="transaction-item">
                  <span className="transaction-detail">{t.details}</span>
                  <span className="transaction-date">{t.date}</span>
                </div>
              ))}
              <div style={{ textAlign: 'right', marginTop: '10px' }}>
                <button className="panel-button more">MORE...</button>
              </div>
            </div>

            {/* CONNECTED ACCOUNTS */}
            <div className="accounts-panel">
              <div className="panel-title">CONNECTED ACCOUNTS</div>
              {accounts.map((a, index) => (
                <div key={`account-${index}`} className="account-item">
                  <span className="info-label">{a.name}</span>
                  <span className="info-value">
                    {a.number} {a.ref}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: '10px' }}>
                <button className="panel-button link">LINK ACCOUNT</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;