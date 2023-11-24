import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventTicketProps {
    startDate: string;
    endDate: string;
    eventOrganizer: string;
    tags: string[];
    entry: string;
    location: string;
    registrationLink: string;
}

const EventTicket: React.FC<EventTicketProps> = ({
    startDate,
    endDate,
    eventOrganizer,
    tags,
    entry,
    location,
    registrationLink, 
}) => {
    if (!startDate) { 
        return null;
    }

    const startDateObject = new Date(startDate);
    const formattedStartDate = startDateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const dayOfWeek = startDateObject.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayOfWeekString = daysOfWeek[dayOfWeek] || '';

    // Format time function
    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes}`;
    };

    const startTime24H = formatTime(new Date(startDate).getHours() * 3600);
    const endTime24H = formatTime(new Date(endDate).getHours() * 3600);

    return (
        <div className="ticket">
            <div className="ticket-left">
                <div className="location">
                    {/* <p className="font-light">{location}</p> */}
                </div>
                <div className="date">
                    <h2 className="num">{startDateObject.getDate()}</h2>
                    <p className="day">{dayOfWeekString.slice(0, 3)}</p>
                </div>
            </div>

            <div className="ticket-right">
                <div className="flex items-center" id="ticket-item">
                    <div className="w-[200px]" id="ticket-img">
                        {/* Updated to use a placeholder image */}
                        <Image src="/feature1.png" alt="placeholder" width={180} height={180} />
                    </div>
                    <div className="flex-grow" id="ticket-desc">
                        <div className="flex items-center justify-between" id="ticket-inner">
                            <div className="space-y-3">
                                <h2 className="text-[20px] text-white">{eventOrganizer}</h2>
                                <div className="flex items-start space-x-4">
                                    <div className="flex items-start justify-center">
                                        <div className="icon mr-2">
                                            <i className="fa fa-table text-xs font-light text-[#CACACA]"></i>
                                        </div>
                                        <p className="leading-relaxed text-sm font-light text-[#CACACA]">
                                            {formattedStartDate} <br /> {startTime24H} - {endTime24H}
                                        </p>
                                    </div>
                                    <div className="sce flex items-center">
                                        <div className="icon mr-2">
                                            <i className="far fa-tags text-xs font-light text-[#CACACA]"></i>
                                        </div>
                                        <p className="leading-relaxed text-sm font-light text-[#CACACA]">{entry}</p>
                                    </div>
                                </div>
                                <div className="space-x-2">
                                    {tags.length > 0 &&
                                        tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="tag rounded-full px-4 py-1 text-black bg-green-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                                <div className="loc flex items-start">
                                    <div className="icon mr-2">
                                        <i className="far fa-map-marker-alt text-[#CACACA] text-[12px]"></i>
                                    </div>
                                    <p className="leading-relaxed text-sm font-light my-[2px] text-[#CACACA]">{location}</p>
                                </div>
                            </div>
                            <Link href={`${registrationLink}`}>
                                <a className="bg-[#1D1D1D] text-white font-light uppercase border-[1px] border-[#474747] rounded-full px-[32px] py-2">
                                    Register
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTicket;
