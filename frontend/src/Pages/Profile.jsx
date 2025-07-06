import React from "react";
import { assets } from '../assets/assets'

const user = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  bio: "Passionate shopper and tech enthusiast. Love exploring new trends and sharing reviews!",
//   avatar: {assets.l},
};

const Profile = () => {
  return (
    <div className="profile-page" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f7f7f7' }}>
      <div style={{ background: '#fff', padding: '2rem 3rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <img
          src={user.avatar}
          alt="Profile"
          style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid #e0e0e0' }}
        />
        <h2 style={{ margin: '0.5rem 0', fontWeight: 700 }}>{user.name}</h2>
        <p style={{ color: '#888', margin: '0.25rem 0 1rem 0' }}>{user.email}</p>
        <p style={{ color: '#444', fontSize: '1rem', marginBottom: 0 }}>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
