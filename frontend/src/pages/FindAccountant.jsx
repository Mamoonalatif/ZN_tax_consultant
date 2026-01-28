import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whiteBg from '../assets/images/white-bg.jpg';

const FindAccountant = () => {
    const [location, setLocation] = useState('All Offices');

    return (
        <div className="find-accountant-page">
            {/* HERO SECTION */}
            <div className="contact-hero alignfull">
                <div
                    className="wp-block-cover__image-background has-parallax"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${whiteBg})`,
                        backgroundPosition: '50% 50%',
                        backgroundAttachment: 'fixed',
                        opacity: 0.3
                    }}
                ></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontWeight: '400', fontSize: '42px', color: '#000' }}>
                        <strong style={{ color: 'black' }}>Find a Pennsylvania Accountant</strong> <span style={{ color: '#333' }}>for Your Small Business or Nonprofit</span>
                    </h1>
                    <p style={{ fontSize: '18px', color: '#222', marginBottom: '30px' }}>
                        ZN Tax Consultant is Here to Help You Search for a CPA or Other Accountant Who Perfectly Suits Your Business's Needs
                    </p>
                    <div className="wp-block-buttons">
                        <div className="wp-block-button">
                            <Link className="wp-block-button__link wp-element-button" to="/schedule" style={{ backgroundColor: '#bb3b41', color: '#fff', padding: '12px 30px', borderRadius: '50px', fontWeight: '700' }}>
                                Schedule An Accounting Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* FILTER SECTION */}
            <div className="find-accountant-filter">
                <div className="container">
                    <h2 style={{ fontSize: '28px', fontWeight: '300' }}>
                        ZN Tax Consultant <strong>Accountants</strong>
                    </h2>
                    <div className="filter-container">
                        <span className="filter-label">Filter By Location:</span>
                        <select
                            className="filter-select"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="All Offices">All Offices</option>
                            <option value="Harrisburg">Harrisburg</option>
                            <option value="Mechanicsburg">Mechanicsburg</option>
                            <option value="Myerstown">Myerstown</option>
                            <option value="Lancaster">Lancaster</option>
                        </select>
                        <button className="filter-btn">Find</button>
                        <button className="filter-btn clear" onClick={() => setLocation('All Offices')}>Clear</button>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="find-accountant-content alignfull">
                <div className="container">
                    <h2>ZN Tax Consultant is Ready to Help You <strong>Find an Accountant</strong></h2>
                    <div className="find-accountant-text">
                        <p>
                            If you own a small or medium-sized business or nonprofit in the Southcentral PA area and you need an accountant for <Link to="/tax">tax preparation/planning</Link>, <Link to="/consulting">business/financial consulting</Link>, <Link to="/acquisitions">acquisition/startup advising</Link>, <Link to="/quickbooks">QuickBooks® services</Link>, or a <Link to="/valuations">business valuation</Link>, look no further.
                        </p>
                        <p>
                            Your search for 'find an accountant near me' or 'CPA near me' is over. ZN Tax Consultant has the professionals you're searching for in Harrisburg, Lancaster, Myerstown and Mechanicsburg. Find a CPA here!
                        </p>
                    </div>

                    <div className="notice-box">
                        <p>
                            <strong>Need a bookkeeper?</strong> We have fractional bookkeepers ready to help your business. <Link to="/bookkeeping">Search here</Link> for bookkeepers and other professionals.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FindAccountant;
