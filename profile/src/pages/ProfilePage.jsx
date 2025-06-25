import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import SkillSection from '../components/SkillSection';
import ExchangeList from '../components/ExchangeList';
import EditProfileModal from '../components/EditProfileModal';
import { getProfile } from '../utils/api';

const ProfilePage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const isOwner = currentUser?.name === username;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(username);
        setProfile(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Could not load profile.');
      }
    };

fetchProfile();
  }, [username]);

  const handleSave = (updatedData) => {
    // optionally refetch or just update local state
    setProfile((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!profile) return <div className="p-4">Loading profile...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProfileHeader profile={profile} />
      {isOwner && (
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      )}
      <SkillSection title="Skills I Offer" skills={profile.skills_offered} />
      <SkillSection title="Skills I Want" skills={profile.skills_wanted} isPriority />
      <h2 className="text-xl font-semibold mt-6 mb-2">Active Exchanges</h2>
      <ExchangeList exchanges={profile.exchanges} />

  {showModal && (
    <EditProfileModal
      profile={profile}
      onClose={() => setShowModal(false)}
      onSave={handleSave}
    />
  )}
</div>
  );
};

export default ProfilePage;

