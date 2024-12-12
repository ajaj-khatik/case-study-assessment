import React, { useState } from "react";

interface Profile {
  id: number;
  name: string;
  description: string;
  photo: string;
  latitude: string;
  longitude: string;
}

const AdminDashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const handleAddProfile = () => {
    setProfiles([
      ...profiles,
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

  const handleChange = (id: number, field: keyof Profile, value: string) => {
    setProfiles(
      profiles.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const handleDeleteProfile = (id: number) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const handleSave = () => {
    console.log("Profiles saved:", profiles);
    alert("Profiles saved successfully!");
  };

  return (
    <div className=" bg-amber-400 mx-auto p-6 gap-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button
        onClick={handleAddProfile}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Profile
      </button>
      {profiles.map((profile) => (
        <div key={profile.id} className="mb-4 border p-4 rounded shadow">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange(profile.id, "name", e.target.value)}
            placeholder="Name"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={profile.description}
            onChange={(e) =>
              handleChange(profile.id, "description", e.target.value)
            }
            placeholder="Description"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={profile.photo}
            onChange={(e) => handleChange(profile.id, "photo", e.target.value)}
            placeholder="Photo URL"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={profile.latitude}
            onChange={(e) =>
              handleChange(profile.id, "latitude", e.target.value)
            }
            placeholder="Latitude"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            value={profile.longitude}
            onChange={(e) =>
              handleChange(profile.id, "longitude", e.target.value)
            }
            placeholder="Longitude"
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={() => handleDeleteProfile(profile.id)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="px-4 py-2 ml-4 bg-blue-500 text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AdminDashboard;
