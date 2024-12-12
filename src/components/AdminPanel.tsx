import React, { useState } from "react";

const AdminPanel: React.FC<{
  profiles: any[];
  onSave: (profiles: any[]) => void;
}> = ({ profiles, onSave }) => {
  const [localProfiles, setLocalProfiles] = useState(profiles);

  const handleAddProfile = () => {
    setLocalProfiles([
      ...localProfiles,
      {
        id: Date.now(),
        name: "",
        description: "",
        photo: "",
        latitude: "",
        longitude: "",
      },
    ]);
  };

  const handleChange = (id: any, field: string, value: string) => {
    setLocalProfiles(
      localProfiles.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleSave = () => {
    onSave(localProfiles);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        onClick={handleAddProfile}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Profile
      </button>
      {localProfiles.map((profile) => (
        <div key={profile.id} className="mb-4">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange(profile.id, "name", e.target.value)}
            placeholder="Name"
            className="border p-2 w-full mb-2"
          />
        </div>
      ))}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AdminPanel;
