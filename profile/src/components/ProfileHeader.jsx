// src/components/ProfileHeader.jsx
import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';

const ProfileHeader = ({ profile }) => {
  const [showModal, setShowModal] = useState(false);
  const isCurrentUser = true; // Replace with logic based on JWT identity

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex items-start gap-4 border-b pb-4">
      <div className="bg-blue-600 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl">
        {initials}
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-gray-600">{profile.tagline}</p>
        <div className="text-sm text-gray-500 mt-1">
          :star: {profile.rating} ({profile.reviews} reviews) · {profile.total_exchanges} exchanges completed
        </div>
        {isCurrentUser && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>

  {showModal && (
    <EditProfileModal
      profile={profile}
      onClose={() => setShowModal(false)}
      onSave={() => window.location.reload()}
    />
  )}
</div>
  );
};

export default ProfileHeader;