import { FC, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Center {
    lat: number;
    lng: number;
}

export interface EventType {
    geolocation: { lat: number, lng: number },
    organizerContact: string,
    followed: boolean,
    _id: string,
    Date: 4,
    date: string,
    startTime: string,
    endTime: string,
    title: string,
    category: string,
    locationUrl: string,
    entry: string,
    registration: string,
    organizer: string
}

interface MapProps {
    locations: EventType[];
}

const DynamicMap: FC<MapProps> = ({ locations }) => {
    const handleMarkerClick = (location: any) => {
        const { lat, lng } = location.geolocation;
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(googleMapsUrl, '_blank');
    };

    const customIcon = new L.Icon({
        iconUrl: "https://i.imgur.com/sjgnRay.png",
        iconSize: [40, 40],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    const mapContainerStyle = {
        width: "100%",
        height: "720px",
        borderRadius: "11px"
    };

    const center: Center = {
        lat: 12.971599,
        lng: 77.594566,
    };

    useEffect(() => {
        import("leaflet");
    }, []);

    return (
        <div style={{ width: "90%", margin: "auto", maxWidth: "1248px", borderRadius: "11px" }}>
            <MapContainer
                style={mapContainerStyle}
                center={[center.lat, center.lng]}
                zoom={12}
                attributionControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations?.map((location: EventType, index: number) => (
                    <Marker
                        key={index}
                        position={[location?.geolocation.lat, location?.geolocation.lng]}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => handleMarkerClick(location),
                        }}
                    >
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default DynamicMap;
