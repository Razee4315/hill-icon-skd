import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, SmokeFree, Pets, VolumeOff, Security } from '@mui/icons-material';
import SEO from '../components/SEO';
import './Policy.css';

const Policy: React.FC = () => {
  const policies = [
    {
      title: "Bookings & Check-in",
      icon: <Gavel />,
      items: [
        "Valid ID required at check-in (CNIC/Passport).",
        "Standard Check-in: 2:00 PM | Check-out: 12:00 PM.",
        "Upfront payment required for confirmation.",
        "Early check-in/Late check-out subject to availability."
      ]
    },
    {
      title: "Guest Conduct",
      icon: <VolumeOff />,
      items: [
        "Quiet hours: 10:00 PM - 7:00 AM.",
        "Respect other guests' privacy and comfort.",
        "Illegal activities are strictly prohibited.",
        "Right to refuse service for policy violations."
      ]
    },
    {
      title: "Health & Safety",
      icon: <SmokeFree />,
      items: [
        "All indoor areas are strictly smoke-free.",
        "Weapons and hazardous materials prohibited.",
        "Guests responsible for personal belongings.",
        "Report lost items within 24 hours."
      ]
    },
    {
      title: "Property Rules",
      icon: <Pets />,
      items: [
        "Pets are not allowed on premises.",
        "Guests liable for property damage.",
        "Outside food restricted in certain areas.",
        "Children under 15 must be supervised."
      ]
    }
  ];

  return (
    <div className="policy-page section">
      <SEO 
        title="Guest Policies" 
        description="Read our hotel policies regarding bookings, check-in/out, guest conduct, and safety at Hill Icon Skardu."
      />
      <div className="container">
        <motion.div
          className="page-header text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">Hotel Guidelines</span>
          <h1 className="page-title mt-2">Guest Policies</h1>
          <p className="page-subtitle text-muted max-w-2xl mx-auto mt-4">
            To ensure a comfortable and safe stay for everyone, we kindly ask you to observe the following policies.
          </p>
        </motion.div>

        <div className="policy-grid">
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              className="policy-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="policy-icon-wrapper">
                {React.cloneElement(policy.icon as React.ReactElement, { className: "policy-icon" })}
              </div>
              <h3 className="policy-card-title">{policy.title}</h3>
              <ul className="policy-list">
                {policy.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="policy-footer text-center mt-16 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>
            <Security fontSize="small" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Management reserves the right to update these policies at any time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Policy;
