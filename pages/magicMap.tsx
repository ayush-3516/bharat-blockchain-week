import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "components/Layout";
import toast from "react-hot-toast";

interface Location {
    lat: number;
    lng: number;
}

interface MapProps {
    locations: Location[];
}

const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
    ssr: false,
});

const fetchEvents = async (): Promise<Location[]> => {
    try {
        const response = await fetch("https://blockchain-bharat-production.up.railway.app/api/events/");
        if (!response.ok) {
            toast.error("Failed to fetch events")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        toast.error("Error fetching events");
        return [];
    }
};

const MagicMap: FC<MapProps> = () => {
    const [eventLocations, setEventLocations] = useState<any>([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const fetchedLocations = await fetchEvents();
            setEventLocations(fetchedLocations);
        };

        fetchLocations();
    }, []);
    return (
        <Layout>
            <DynamicMap locations={eventLocations} />
        </Layout>
    );
};

export default MagicMap;
