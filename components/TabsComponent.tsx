/*
import { useState, useEffect } from 'react';
import Tags from './Tags';
import EventTicket from './EventTicket';
import axios from 'axios';
import Loader from './Loader';
import EventGrid from './EventGrid';
import Ad from './Ad';

interface TabData {
    _id: string;
    title: string;
    date: string;
    startDate: string;
    endDate: string;
    organizer: string;
    description: string;
    category: string;
    location: string;
    locationUrl: string;
    posterUrl: string;
    organizerContact: string;
    followed: boolean;
    entry: string;
    __v: number;
}

const TabsComponent: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [showExclusiveEvents] = useState<boolean>(false);
    const [data, setData] = useState<TabData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://blockchain-bharat-production.up.railway.app/api/events/')
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const day = date.toLocaleDateString(undefined, { day: 'numeric' });
        const month = date.toLocaleDateString(undefined, { month: 'short' });
        return `${day} ${month}`;
    };

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const handleDateClick = (date: string | null) => {
        setSelectedDate(date);
    };

    const tagsByDate = Array.from(new Set(data.map((tab) => tab.startDate)))

    const tagsByCategory = Array.from(new Set(data.map((tab) => tab.category)))

    const filteredTabs = data.filter((tab) => {
        const tabFields = tab || {}; // Handle undefined fields
        const tagFilter = !selectedTag || tabFields['category'].includes(selectedTag);
        const dateFilter = !selectedDate || formatDate(tabFields['startDate']) === selectedDate;

    
    });

    return (
        <section className='relative py-12'>
            {loading ? <Loader /> :
                (
                    <div>
                        <Tags
                            tags={tagsByDate.map((date) => formatDate(date))}
                            selectedTag={selectedDate}
                            onTagClick={handleDateClick}
                            className="tag-date"
                        />
                        <Tags
                            tags={tagsByCategory}
                            selectedTag={selectedTag}
                            onTagClick={handleTagClick}
                            className="tag-category"
                        />

                        <div className="container mx-auto px-0">
                            {
                                filteredTabs.map((tab, index) => (
                                    <div key={index}>
                                        <EventTicket
                                            startDate={tab.startDate}
                                            endDate={tab.endDate}
                                            eventOrganizer={tab.organizer}
                                            tags={tab.category.split('/')}
                                            entry={tab.entry}
                                            location={tab.location}
                                            registrationLink="https://"
                                        />
                                    </div>
                                ))
                            }
                            <Ad />
                        </div>
                    </div>
                )}
        </section>
    );
};

export default TabsComponent;

*/
import React from 'react'
const TabsComponent = () => {
  return (
    <div>TabsComponent</div>
  )
}

export default TabsComponent