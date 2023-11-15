/*
import { useState, useEffect } from 'react';
import Tags from './Tags';
import EventTicket from './EventTicket';
import axios from 'axios';
import Loader from './Loader';
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

const TabComponent: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [data, setData] = useState<TabData[]>([]);
    const [loading, setLoading] = useState(true);
    const [ticketsRendered] = useState(0);
    const [currentYearMonth, setCurrentYearMonth] = useState<string>('');
    const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(0);
 
    useEffect(() => {
        axios
            .get('https://blockchain-bharat-production.up.railway.app/api/events/')
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const formatYearMonth = (dateStr: string) => {
        const date = new Date(dateStr);
        const year = date.toLocaleDateString(undefined, { year: 'numeric' });
        const month = date.toLocaleDateString(undefined, { month: 'long' });
        return `${month} ${year}`;
    };

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const handleDateClick = (date: string | null) => {
        setSelectedDate(date);
    };

    const yearMonthTags = Array.from(new Set(data.map((tab) => formatYearMonth(tab.startDate))));
    const categoryTags = Array.from(new Set(data.map((tab) => tab.category)));

    const filteredTabs = data.filter((tab) => {
        const tabFields = tab || {};
        const tagFilter = !selectedTag || tabFields['category'].includes(selectedTag);
        const dateFilter = !selectedDate || formatYearMonth(tabFields['date']) === selectedDate;

        return tagFilter && dateFilter;
    });

    useEffect(() => {
        if (yearMonthTags.length > 0) {
            setCurrentYearMonth(yearMonthTags[currentMonthIndex]);
        }
    }, [yearMonthTags, currentMonthIndex]);

    const handleMonthChange = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentMonthIndex((prevIndex) =>
                prevIndex < yearMonthTags.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else {
            setCurrentMonthIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        }
    };

    return (
        <section className='relative'>
            {loading ? (
                <Loader />
            ) : (
                <div className='py-2 pb-12'>
                    <div className="container mx-auto px-0">
                        <Ad />
                        <div className='flex items-center text-orange-500 space-x-3'>
                            <button onClick={() => handleMonthChange('prev')}>&lt;</button>
                            <span className='text-gray-200'>
                                {currentYearMonth}   </span>
                            <button onClick={() => handleMonthChange('next')}>&gt;</button>
                        </div>
                        <Tags
                            tags={yearMonthTags}
                            selectedTag={selectedDate}
                            onTagClick={handleDateClick}
                            className="tag-date"
                        />
                        <Tags
                            tags={categoryTags}
                            selectedTag={selectedTag}
                            onTagClick={handleTagClick}
                            className="tag-category"
                        />
                        {filteredTabs.map((tab, index) => (
                            <div key={index}>
                                <EventTicket
                                    startDate={tab.startDate}
                                    endDate={tab.endDate}
                                    eventOrganizer={tab.organizer}
                                    tags={[formatYearMonth(tab.startDate), ...tab.category.split('/')]}
                                    entry={tab.entry}
                                    location={tab.location}
                                    registrationLink="https://forms/"
                                />
                                {((ticketsRendered % 4 === 0) && index !== filteredTabs.length - 1) && <Ad />}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default TabComponent;

*/

import React from 'react'

const TabComponent = () => {
    return (
        <div>TabComponent</div>
    )
}

export default TabComponent