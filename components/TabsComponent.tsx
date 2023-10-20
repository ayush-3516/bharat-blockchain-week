import { useState, useEffect } from 'react';
import Tags from './Tags';
import EventTicket from './EventTicket';
import axios from 'axios';
import Loader from './Loader';

/*
interface TabItem {
    id: string;
    date: string;
    start: number;
    end: number;
    eventOrganizer: string;
    content: string;
    tags: string[];
    price: string;
    location: string;
    registrationLink: string;
    isApproved: boolean;
}
*/

interface TabData {
    id: string;
    fields: {
        [key: string]: any;
    };
}

const TabsComponent: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [showExclusiveEvents] = useState<boolean>(false);
    const [data, setData] = useState<TabData[]>([]);
    const [loading] = useState(false)

    useEffect(() => {
        axios.get('/api/airtable')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag); // Update selectedTag, not selectedDate
    };

    const handleDateClick = (date: string | null) => {
        setSelectedDate(date); // Update selectedDate
    };

    const tagsByDate = Array.from(new Set(data.map((tab) => tab.fields['Date'])));
    const tagsByCategory = Array.from(new Set(data.map((tab) => tab.fields['Category'])))

    // Define your filtering logic here if needed
    const filteredTabs = data.filter((tab) => {
        const tagFilter = !selectedTag || tab.fields['Category'].includes(selectedTag);
        const dateFilter = !selectedDate || tab.fields['Date'] === selectedDate;

        if (showExclusiveEvents) {
            return tagFilter || dateFilter || (tab.fields['price'] !== 'Free' && tab.fields['Approve Event'] === 'YES');
        } else {
            return tagFilter && dateFilter && tab.fields['Approve Event'] === 'YES';
        }
    });


    return (
        <section className='relative py-12 bg-black'>
            {loading ? <Loader /> :
                (
                    <div>
                        <Tags
                            tags={tagsByDate}
                            selectedTag={selectedDate}
                            onTagClick={handleDateClick}
                        />
                        <Tags
                            tags={tagsByCategory}
                            selectedTag={selectedTag}
                            onTagClick={handleTagClick}
                        />
                        <div className="container mx-auto px-0">
                            <ul className='py-0'>
                                {filteredTabs.map((tab, index) => (
                                    <li key={index}>
                                        <EventTicket
                                            key={index}
                                            date={tab.fields['Date']}
                                            start={tab.fields['Start Time']}
                                            end={tab.fields['End Time']}
                                            eventOrganizer={tab.fields['Event Name']}
                                            tags={tab.fields['Category'].split('/')} // Split the Category string into an array if it contains '/'
                                            price={tab.fields['Entry']}
                                            location={tab.fields['Event Location']}
                                            registrationLink={tab.fields['Registration link']}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
        </section>
    );
};

export default TabsComponent;
