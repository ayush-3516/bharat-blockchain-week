import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventTicket from './EventTicket';
import Tags from './Tags';  // Make sure to import your Tags component
import Ad from './Ad';

interface EventData {
    _id: string;
    Date: number;
    date: string;
    startTime: string;
    endTime: string;
    title: string;
    category: string;
    locationUrl: string;
    entry: string;
    registration: string;
    organizer: string;
    posterUrl: string;
}

const TabsComponent = () => {
    const [data, setData] = useState<EventData[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get('https://blockchain-bharat-production.up.railway.app/api/events/')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // Extract all unique dates and months from data and sort them
    const yearMonthTags = Array.from(
        new Set(data.map((item) => new Date(item.date).toLocaleString('en-US', { month: 'short', day: 'numeric' })))
    ).sort();

    const categoryTags = Array.from(new Set(data.map((item) => item.category)));

    const handleDateClick = (date: string) => {
        setSelectedDate(date);
        setSelectedTag(null);
    };

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        setSelectedDate(null);
    };

    const onTagClick = (tag: string | null, tagType: 'date' | 'category') => {
        if (tagType === 'date') {
            handleDateClick(tag as string);
        } else {
            handleTagClick(tag as string);
        }
    };

    const filteredEvents = data.filter((item) => {
        return (
            (!selectedDate || new Date(item.date).toLocaleString('en-US', { month: 'short', day: 'numeric' }) === selectedDate) &&
            (!selectedTag || item.category === selectedTag)
        );
    });

    return (
        <div className="container mx-auto">
            <Ad showAd={false} image='http://dummyimage.com/1220x220/' link='http://dummyimage.com/' />
            <Tags
                tags={yearMonthTags}
                selectedTag={selectedDate}
                onTagClick={(tag) => onTagClick(tag, 'date')}
                className="tag-date"
            />
            <Tags tags={categoryTags} selectedTag={selectedTag} onTagClick={(tag) => onTagClick(tag, 'category')} className="tag-category" />
            {filteredEvents.map((item, index) => (
                <div key={item._id}>
                    <EventTicket
                        date={item.date}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        title={item.title}
                        tags={[...item.category.split('/')]}
                        entry={item.entry}
                        location={item.locationUrl}
                        registrationLink={item.registration}
                        posterUrl={item.posterUrl}
                    />
                    {(index + 1) % 7 === 0 && <Ad showAd={false} image='' link='' />}
                </div>
            ))}
        </div>
    );
};

export default TabsComponent;