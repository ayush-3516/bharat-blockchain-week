import React, { useState } from 'react';

type Props = {
    time: string,
    date: string,
    title: string,
    description: string,
    stage: string,
    location: string,
}

// Define a reusable TimelineItem component
const TimelineItem = ({ time, date, title, description, stage, location }: Props) => (
    <div className="py-8 flex items-start border-2 border-purple-600 drop-shadow-[4px_4px_0px_#7e22ce] bg-white rounded-3xl w-10/12 mx-auto px-10 overflow-hidden flex-wrap md:flex-nowrap relative">
        <div className="absolute -bottom-3 -right-3">
            <i className="fal fa-compact-disc text-[90px] text-gray-200"></i>
        </div>
        <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">{time}</span>
        </div>
        <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
            <p className="leading-relaxed">{description}</p>
            <a className="font-semibold inline-flex items-center mt-4">
                <span>
                    <i className="fas fa-map-marker-alt text-purple-900 text-sm"></i>
                </span>
                <span className="mx-2">
                    {stage} - {location}
                </span>
            </a>
        </div>
    </div>
);

const Timeline = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({
        stage: 'All',
        location: 'All',
        time: 'All',
    });

    // Define an array of timeline items
    const timelineItems = [
        {
            time: '7:30AM',
            date: '12 Jun 2014',
            title: 'Registration and Continental Breakfast',
            description: '7:30AM - 9:00AM GMT+8 /5:00AM - 6:30AM',
            stage: 'OKX Mainstage',
            location: 'Location 1',
        },
        {
            time: '9:00AM',
            date: '12 Jun 2019',
            title: 'Meditation bushwick direct trade taxidermy shaman',
            description: '7:30AM - 9:00AM GMT+8 /5:00AM - 6:30AM',
            stage: 'Mainstage 2',
            location: 'Location 2',
        },
        {
            time: '10:00AM',
            date: '12 Jun 2019',
            title: 'Woke master cleanse drinking vinegar salvia',
            description: '7:30AM - 9:00AM GMT+8 /5:00AM - 6:30AM',
            stage: 'Mainstage 3',
            location: 'Location 3',
        },
    ];

    // Filter timeline items based on search term, stage, location, and time
    const filteredTimelineItems = timelineItems.filter((item) => {
        return (
            (item.stage === filterCriteria.stage || filterCriteria.stage === 'All') &&
            (item.location === filterCriteria.location || filterCriteria.location === 'All') &&
            (item.time === filterCriteria.time || filterCriteria.time === 'All') &&
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const uniqueStages = Array.from(new Set(timelineItems.map((item) => item.stage)));
    const uniqueLocations = Array.from(new Set(timelineItems.map((item) => item.location)));
    const uniqueTimes = Array.from(new Set(timelineItems.map((item) => item.time)));

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-32 py-24 mx-auto">
                <div className="mb-4 flex items-center justify-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search by session title"
                        className=" w-[520px] py-2 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border border-gray-300 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        onChange={(e) =>
                            setFilterCriteria({ ...filterCriteria, stage: e.target.value })
                        }
                    >
                        <option value="All">All Stages</option>
                        {uniqueStages.map((stage) => (
                            <option key={stage} value={stage} className='py-2'>
                                {stage}
                            </option>
                        ))}
                    </select>
                    <select
                        className="border border-gray-300 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        onChange={(e) =>
                            setFilterCriteria({ ...filterCriteria, location: e.target.value })
                        }
                    >
                        <option value="All">All Locations</option>
                        {uniqueLocations.map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                    <select
                        className="border border-gray-300 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        onChange={(e) =>
                            setFilterCriteria({ ...filterCriteria, time: e.target.value })
                        }
                    >
                        <option value="All">All Times</option>
                        {uniqueTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-8 space-y-4">
                    {filteredTimelineItems.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
