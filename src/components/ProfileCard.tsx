import React from "react";

const ProfileCard: React.FC<{
  profile: any;
  onSummaryClick: (id: any) => void;
}> = ({ profile, onSummaryClick }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
    <img
      src={profile.photo}
      alt={profile.name}
      className="w-24 h-24 rounded-full mb-3"
    />
    <h2 className="text-lg font-semibold">{profile.name}</h2>
    <p className="text-slate-800 text-sm">{profile.description}</p>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => onSummaryClick(profile.id)}
    >
      Summary
    </button>
  </div>
);

export default ProfileCard;
