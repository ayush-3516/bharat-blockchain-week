import React, { useEffect } from 'react'

type Props = {
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

const EventForm = ({
    date, start, end, eventOrganizer, content, tags, price, location, registrationLink
}: Props) => {

    useEffect(() => {
        console.log(
            "Event Form", eventOrganizer, content, tags, price, location, date, start, end, registrationLink
        );
    }, [])

    return (
        <div>EventForm</div>
    )
}

export default EventForm