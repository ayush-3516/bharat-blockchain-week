// EventGrid.tsx

import React from 'react';
import GridTicket from './GridTicket';
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

const EventGrid: React.FC<{ events: EventData[] }> = ({ events }) => (
    <div className="event-grid flex items-center justify-center gap-6 py-4 flex-wrap">
        {events.map((item, index) => (
            <div key={item._id} className="flex items-center flex-wrap space-x-5">
                <GridTicket
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

export default EventGrid;
