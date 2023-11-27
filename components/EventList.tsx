// EventList.tsx

import React from 'react';
import EventTicket from './EventTicket';

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

const EventList: React.FC<{ events: EventData[] }> = ({ events }) => (
    <div className="event-list">
        {events.map((item) => (
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
                    highlight={['ETHIndia', 'IBW', 'Web3 Carnival'].some((highlightTitle) => item.title.includes(highlightTitle))}
                />
                {/* {(index + 1) % 7 === 0 && <Ad showAd={false} image='' link='' />} */}
            </div>
        ))}
    </div>
);

export default EventList;
