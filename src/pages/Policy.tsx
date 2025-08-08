import React from 'react';
import './Policy.css';

const Policy: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <header className="policy-header">
          <h1 className="policy-title">Hotel Policies</h1>
          <p className="policy-intro">These standard policies help ensure a comfortable and safe stay for everyone.</p>
        </header>

        <section className="policy-section">
          <h2>1. Bookings</h2>
          <ul>
            <li>All rooms and rates depend on availability and may change at the hotel’s discretion.</li>
            <li>A valid ID is required at check-in (CNIC for locals, passport for foreign guests).</li>
            <li>Upfront payment is required to confirm the booking. A valid card or cash deposit may be requested as guarantee.</li>
            <li>Standard check-in time is 2:00 PM. Standard check-out time is 12:00 PM (noon).</li>
            <li>Early check-in or late check-out is subject to availability. Late check-out charges may apply (half-day till 3 PM; full-day after 3 PM).</li>
            <li>Maximum room occupancy is set by room type. An extra rollaway bed can be provided for Rs 3,000 per night when available.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Guest Belongings</h2>
          <ul>
            <li>Please keep your room door locked when away or sleeping. In-room lockers are provided to store valuables.</li>
            <li>The hotel is not responsible for loss or damage to personal belongings left in rooms, lockers, or public areas.</li>
            <li>Lost and found items are kept for up to 30 days. Report missing items within 24 hours for best assistance.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Smoke‑Free</h2>
          <ul>
            <li>All indoor areas, including rooms and lounges, are smoke‑free.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Pets</h2>
          <ul>
            <li>Pets are not allowed on hotel premises.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Prohibited Items & Conduct</h2>
          <ul>
            <li>Weapons, illegal drugs, explosives, and hazardous items are strictly prohibited.</li>
            <li>Gambling, prostitution, and any unlawful activities are not permitted.</li>
            <li>Alcohol consumption must comply with local laws and hotel rules.</li>
            <li>Violations may result in immediate eviction without refund.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Noise & Behavior</h2>
          <ul>
            <li>Please be considerate of other guests. Excessive noise or disruptive behavior is not allowed.</li>
            <li>Management may request corrective action or ask guests to vacate for non‑compliance.</li>
            <li>Children under 15 must be supervised by an adult at all times.</li>
            <li>Outside food may be restricted in certain areas; please check with reception.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Damage to Property</h2>
          <ul>
            <li>Guests are responsible for any damage to hotel property caused by themselves or their visitors.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Safety, Injuries & Claims</h2>
          <ul>
            <li>Due to local infrastructure conditions, occasional service interruptions may occur.</li>
            <li>The hotel is not liable for injuries or losses arising from circumstances beyond reasonable control.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Management Rights</h2>
          <ul>
            <li>Management reserves the right to refuse service or evict guests for policy violations or unsafe conduct.</li>
            <li>No tenancy rights are created by a room booking; the hotel remains in full possession of the premises.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Laws & Regulations</h2>
          <ul>
            <li>Guests must comply with applicable laws and government regulations at all times.</li>
          </ul>
        </section>

        <p className="policy-note">Management may update these policies from time to time.</p>
      </div>
    </div>
  );
};

export default Policy;


