import { useState } from 'react';
import Tags from './Tags';
import Image from 'next/image';

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
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const tabs: TabItem[] = [
        {
            date: '17/10/2023',
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
            date: '18/10/2023',
            start: '10:00 AM',
            end: '1:00 PM',
            eventOrganizer: 'Name of Event 2',
            content: 'Content for Event 2',
            tags: ['conference/summit'],
            price: 'paid',
            location: 'New York',
            registrationLink: 'https://example.com/event2',
        },
        {
            date: '19/10/2023',
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
            date: '20/10/2023',
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
            date: '21/10/2023',
            start: '6:00 PM',
            end: '8:00 PM',
            eventOrganizer: 'Name of Event 5',
            content: 'Content for Event 5',
            tags: ['gaming'],
            price: 'free',
            location: 'Sydney',
            registrationLink: 'https://example.com/event5',
        }, {
            date: '22/10/2023',
            start: '7:00 PM',
            end: '9:00 PM',
            eventOrganizer: 'Name of Event 6',
            content: 'Content for Event 6',
            tags: ['workshop/hackathon'],
            price: 'free',
            location: 'Beijing',
            registrationLink: 'https://example.com/event6',
        }, {
            date: '23/10/2023',
            start: '8:00 PM',
            end: '10:00 PM',
            eventOrganizer: 'Name of Event 7',
            content: 'Content for Event 7',
            tags: ['party/dinner'],
            price: 'free',
            location: 'Paris',
            registrationLink: 'https://example.com/event7',
        }
    ];

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
    };

    const handleDateClick = (date: string | null) => {
        setSelectedDate(date);
    };

    const handlePaymentClick = (payment: string | null) => {
        setSelectedPayment(payment);
    };

    // Filter tabs based on selected criteria
    const filteredTabs = tabs.filter((tab) => {
        const tagFilter = !selectedTag || tab.tags.includes(selectedTag);
        const dateFilter = !selectedDate || tab.date === selectedDate;
        const paymentFilter = !selectedPayment || tab.price === selectedPayment;

        return tagFilter && dateFilter && paymentFilter;
    });

    return (
        <div className="w-full">
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
            <Tags
                tags={['free', 'paid']}
                selectedTag={selectedPayment}
                onTagClick={handlePaymentClick}
            />
            <div id='events'>
                {filteredTabs.length === 0 ? (
                    'No content available'
                ) : (
                    <ul>
                        {filteredTabs.map((tab, index) => (
                            <li key={index}>
                                <div className="flex items-center justify-center overflow-hidden mx-auto border-2 rounded-3xl event-card px-4 py-4 mb-10 border-purple-600 sm:flex-row flex-col">
                                    <div className="sm:mr-10 text-xl font-semibold my-4 inline-flex items-center justify-center rounded-full text-purple-600 flex-shrink-0">
                                        {tab.date}
                                    </div>
                                    <div className="p-2 lg:w-2/3" id="event-card">
                                        <div className="h-full flex sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center text-center sm:text-left">
                                            <Image alt="team" width="100%" height="100%" src="https://dummyimage.com/200x200" />
                                            <div className="flex-grow w-full">
                                                <h2 className="font-medium text-2xl text-gray-900 mt-4 mb-2">
                                                    {tab.eventOrganizer}
                                                </h2>
                                                <span className="flex sm:items-start items-center sm:justify-start justify-center flex-wrap gap-2">
                                                    {tab.tags && tab.tags.map((tag) => (
                                                        <span
                                                            key={tag} // Add a unique key to each span
                                                            className="inline-block py-2 px-4 rounded-lg bg-purple-200 text-purple-700 text-sm font-semibold tracking-wider capitalize"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    <span className="inline-block py-2 px-4 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 text-sm font-semibold tracking-wider capitalize">
                                                        {
                                                            tab.price
                                                        }
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TabComponent;
