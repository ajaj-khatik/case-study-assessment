import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import profilesData from "../data/profiles.json";
import Map from "../components/Map";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSummaryClick = (id: number) => {
    setSelectedProfileId(id === selectedProfileId ? null : id);
  };

  const handleButtonClick = () => {
    navigate("/admin");
  };

  const filteredProfiles = profilesData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" bg-amber-400 justify-center p-10 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profiles</h1>
      <SearchBar onSearch={setSearchQuery} />
      <button
        onClick={handleButtonClick}
        className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Admin
      </button>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className="p-4 bg-white rounded-lg shadow-md flex flex-col items-start relative"
          >
            <h2 className="text-lg font-semibold flex items-center justify-between w-full">
              {profile.name}
            </h2>
            <ProfileCard
              profile={profile}
              onSummaryClick={handleSummaryClick}
            />
            {selectedProfileId === profile.id && (
              <div className="absolute top-0 right-0 w-64 h-64">
                <Map profile={profile} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
