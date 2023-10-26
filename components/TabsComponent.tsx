import { useState, useEffect } from 'react';
import Tags from './Tags';
import EventTicket from './EventTicket';
import axios from 'axios';
import Loader from './Loader';
//import EventGrid from './EventGrid';
import Ad from './Ad';

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
    const [loading] = useState(false);

    useEffect(() => {
        axios.get('/api/airtable')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
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

    const tagsByDate = Array.from(new Set(data.map((tab) => tab.fields['Date'])))

    const tagsByCategory = Array.from(new Set(data.map((tab) => tab.fields['Category'])))

    const filteredTabs = data.filter((tab) => {
        const tagFilter = !selectedTag || tab.fields['Category'].includes(selectedTag);
        const dateFilter = !selectedDate || formatDate(tab.fields['Date']) === selectedDate;

        if (showExclusiveEvents) {
            return tagFilter || dateFilter || (tab.fields['price'] !== 'Free' && tab.fields['Approve Event'] === 'YES');
        } else {
            return tagFilter && dateFilter && tab.fields['Approve Event'] === 'YES';
        }
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
                                            date={tab.fields['Date']}
                                            start={tab.fields['Start Time']}
                                            end={tab.fields['End Time']}
                                            eventOrganizer={tab.fields['Event Name']}
                                            tags={tab.fields['Category'].split('/')}
                                            price={tab.fields['Entry']}
                                            location={tab.fields['Event Location']}
                                            registrationLink={tab.fields['Registration link']}
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
