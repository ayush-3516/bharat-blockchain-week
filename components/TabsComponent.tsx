import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventList from './EventList';
import EventGrid from './EventGrid';
import Tags from './Tags';
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

const TabsComponent: React.FC = () => {
    const [data, setData] = useState<EventData[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedView, setSelectedView] = useState<string>('list'); // Default to list view
    const [yearMonthTags, setYearMonthTags] = useState<string[]>([]);

    useEffect(() => {
        axios
            .get<EventData[]>('https://blockchain-bharat-production.up.railway.app/api/events/')
            .then((res: { data: any[]; }) => {
                const sortedEvents = res.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                setData(sortedEvents);

                const sortedYearMonthTags = Array.from(
                    new Set(sortedEvents.map((item) => new Date(item.date).toLocaleString('en-US', { month: 'short', day: 'numeric' })))
                ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

                setYearMonthTags(sortedYearMonthTags);
            })
            .catch((err: any) => {
                console.error(err);
            });
    }, []);

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
            <Ad showAd={false} image='' link='' />
            <Tags
                tags={yearMonthTags}
                selectedTag={selectedDate}
                onTagClick={(tag) => onTagClick(tag, 'date')}
                className="tag-date"
            />
            <div className="flex items-center justify-between space-x-3" id='tags-filter'>
                <Tags tags={categoryTags} selectedTag={selectedTag} onTagClick={(tag) => onTagClick(tag, 'category')} className="tag-category" />
                <div className='text-white space-x-3 mt-4' id='tags-list'>
                    <button className={`py-3 px-4 capitalize rounded-lg ${selectedView === "list" ? "bg-[#ff4e00]" : "bg-[#141414]"} text-[#f1f1f1]`} onClick={() => setSelectedView('list')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" fill="#fff" /></svg>
                    </button>
                    <button className={`py-3 px-4 capitalize rounded-lg ${selectedView === "grid" ? "bg-[#ff4e00]" : "bg-[#141414]"} text-[#f1f1f1]`} onClick={() => setSelectedView('grid')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" fill="#fff" />
                        </svg>
                    </button>
                </div>
            </div>

            {selectedView === 'list' && <EventList events={filteredEvents} />}
            {selectedView === 'grid' && <EventGrid events={filteredEvents} />}
        </div>
    );
};

export default TabsComponent;
