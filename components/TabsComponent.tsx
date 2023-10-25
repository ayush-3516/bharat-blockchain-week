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
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const [isMobileView, setIsMobileView] = useState<boolean>(false);

    useEffect(() => {
        axios.get('/api/airtable')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust the screen width as needed
        };

        handleResize(); // Call it once to set the initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const formatDate = (dateStr: string) => {
        const options = { day: 'numeric', month: 'short' } as Intl.DateTimeFormatOptions;
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

    const switchToListView = () => {
        setViewMode('list');
    };

    const switchToGridView = () => {
        setViewMode('grid');
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
                        {/* <div className="flex items-center justify-center space-x-2 mt-4">
                            <button
                                className={`px-3 py-2 w-14 rounded-md ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
                                onClick={switchToListView}
                            >
                                <i className="fas fa-list"></i>
                            </button>
                            {!isMobileView && (
                                <button
                                    className={`px-3 py-2 w-14 rounded-md ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
                                    onClick={switchToGridView}
                                >
                                    <i className="fas fa-th"></i>
                                </button>
                            )}
                        </div> */}
                        <div className="container mx-auto px-0">
                            {viewMode === 'list' ? (
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
                            ) : (
                                <div className="flex items-center justify-around flex-wrap -m-3">
                                    {filteredTabs.map((tab, index) => (
                                        <div key={index}>
                                            <p>{tab.fields['Event Name']}</p>
                                            {/* <EventGrid
                                                key={index}
                                                eventTitle={tab.fields['Event Name']}
                                                eventLocation={tab.fields['Event Location']}
                                                eventDate={formatDate(tab.fields['Date'])}
                                                start={`${tab.fields['Start Time']}`}
                                                end={`${tab.fields['End Time']}`}
                                                eventCategory={tab.fields['Category']}
                                                eventPrice={tab.fields['Entry']}
                                                registrationLink={tab.fields['Registration link']}
                                            /> */}
                                            grid section
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Ad />
                        </div>
                    </div>
                )}
        </section>
    );
};

export default TabsComponent;
