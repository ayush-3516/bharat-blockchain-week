import { useState } from 'react';
import Tags from './Tags';
import EventTicket from './EventTicket';

interface TabItem {
    date: string;
    start: string;
    end: string;
    eventOrganizer: string;
    content: string;
    tags: string[];
    price: string;
    location: string;
    registrationLink: string;
}

const TabComponent: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [showExclusiveEvents, setShowExclusiveEvents] = useState<boolean>(false); // Track exclusive events

    const tabs: TabItem[] = [
        {
            date: '04 Dec',
            start: '9:00 AM',
            end: '12:00 PM',
            eventOrganizer: 'Name of Event 1',
            content: 'Content for Event 1',
            tags: ['workshop/hackathon', 'party/dinner'],
            price: 'free',
            location: 'Singapore',
            registrationLink: '',
        },
        {
            date: '05 Dec',
            start: '10:00 AM',
            end: '1:00 PM',
            eventOrganizer: 'Name of Event 2',
            content: 'Content for Event 2',
            tags: ['conference/summit'],
            price: '542',
            location: 'New York',
            registrationLink: 'https://example.com/event2',
        },
        {
            date: '06 Dec',
            start: '2:00 PM',
            end: '4:00 PM',
            eventOrganizer: 'Name of Event 3',
            content: 'Content for Event 3',
            tags: ['gaming', 'networking'],
            price: 'free',
            location: 'London',
            registrationLink: 'https://example.com/event3',
        },
        {
            date: '07 Dec',
            start: '5:00 PM',
            end: '7:00 PM',
            eventOrganizer: 'Name of Event 4',
            content: 'Content for Event 4',
            tags: ['other'],
            price: 'free',
            location: 'Tokyo',
            registrationLink: 'https://example.com/event4',
        },
        {
            date: '08 Dec',
            start: '6:00 PM',
            end: '8:00 PM',
            eventOrganizer: 'Name of Event 5',
            content: 'Content for Event 5',
            tags: ['gaming'],
            price: 'free',
            location: 'Sydney',
            registrationLink: 'https://example.com/event5',
        }, {
            date: '09 Dec',
            start: '7:00 PM',
            end: '9:00 PM',
            eventOrganizer: 'Name of Event 6',
            content: 'Content for Event 6',
            tags: ['workshop/hackathon'],
            price: 'free',
            location: 'Beijing',
            registrationLink: 'https://example.com/event6',
        }, {
            date: '10 Dec',
            start: '8:00 PM',
            end: '10:00 PM',
            eventOrganizer: 'Name of Event 7',
            content: 'Content for Event 7',
            tags: ['party/dinner'],
            price: 'free',
            location: 'Paris',
            registrationLink: 'https://example.com/event7',
        }
    ]; // Your tab data

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const handleDateClick = (date: string | null) => {
        setSelectedDate(date);
    };

    // Filter tabs based on selected criteria
    const filteredTabs = tabs.filter((tab) => {
        const tagFilter = !selectedTag || tab.tags.includes(selectedTag);
        const dateFilter = !selectedDate || tab.date === selectedDate;

        if (showExclusiveEvents) {
            return tagFilter || dateFilter || tab.price !== 'free'; // Display events with some price
        } else {
            return tagFilter && dateFilter;
        }
    });

    return (
        <section className='relative events-section bg-black'>
            <div className="container px-5 py-24 mx-auto">
                <Tags
                    tags={Array.from(new Set(tabs.map((tab) => tab.date)))}
                    selectedTag={selectedDate}
                    onTagClick={handleDateClick}
                />
                <Tags
                    tags={Array.from(new Set(tabs.flatMap((tab) => tab.tags)))}
                    selectedTag={selectedTag}
                    onTagClick={handleTagClick}
                />
                <div className="bg-black py-12">
                    {filteredTabs.length === 0 ? (
                        'No content available'
                    ) : (
                        <div>
                            {filteredTabs.map((tab, index) => (
                                <div key={index} className='bg-black'>
                                    <EventTicket
                                        date={tab.date}
                                        start={
                                            tab.start
                                        }
                                        end={
                                            tab.end
                                        }
                                        eventOrganizer={
                                            tab.eventOrganizer
                                        }
                                        content={
                                            tab.content
                                        }
                                        tags={
                                            tab.tags
                                        }
                                        price={tab.price}
                                        location={
                                            tab.location
                                        }
                                        registrationLink={
                                            tab.registrationLink
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TabComponent;
