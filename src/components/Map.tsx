import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Profile {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}
const Map = ({ profile }: { profile: Profile }) => (
  <div className="mt-6">
    <MapContainer
      center={[profile.latitude, profile.longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[profile.latitude, profile.longitude]}>
        <Popup>
          <strong>{profile.name}</strong>
          <p>{profile.address}</p>
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Map;
