import Link from 'next/link';
import React from 'react';

type Props = {
    date: string;
    start: number;
    end: number;
    eventOrganizer: string;
    tags: string[];
    price: string;
    location: string;
    registrationLink: string;
}

const EventTicket = (
    {
        date, start, end, eventOrganizer, tags, price, location, registrationLink
    }: Props
) => {

    const dateComponents = date.split('-');
    const day = dateComponents[2]; // Extract the day component
    const month = getMonthName(dateComponents[1]); // Convert the month number to its name

    function getMonthName(monthNumber: string) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthIndex = parseInt(monthNumber, 10) - 1;
        return months[monthIndex] || '';
    }

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes}`;
    };

    const startTime24H = formatTime(start);
    const endTime24H = formatTime(end);


    return (
        <div className="ticket">
            <div className="ticket-right">
                <h2 className="num">{day}</h2>
                <p className="day">{month}</p>
                <span className="up-border"></span>
                <span className="down-border"></span>
            </div>

            <div className="ticket-left ">
                <div className=' space-x-2'>
                    {tags.length > 0 &&
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="tag rounded-lg px-4 py-1 text-black bg-green-200"
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>

                <h2 className="title font-semibold my-2">{eventOrganizer}</h2>

                <div className="flex items-start space-x-8">
                    <div className="sce flex items-center justify-center">
                        <div className="icon">
                            <i className="fa fa-table text-xs"></i>
                        </div>
                        <p className='leading-relaxed' >{date} <br /> {startTime24H} - {endTime24H}</p>
                    </div>
                    <div className="sce flex items-center">
                        <div className="icon">
                            <i className="fa fa-tags text-xs"></i>
                        </div>
                        <p className='leading-relaxed'>{price}</p>
                    </div>
                </div>
                <div className="fix"></div>
                <div className="loc flex items-start my-2">
                    <div className="icon">
                        <i className="fa fa-map-marker text-xs"></i>
                    </div>
                    <p className='leading-relaxed'>{location}</p>
                </div>
                <div className="fix"></div>
                <Link href={registrationLink}>
                    <a className="tickets bg-gradient-to-br from-orange-500 to-[#ff4e00] rounded-full px-[32px] py-2">
                        Register
                    </a></Link>
            </div>
        </div>
    );
};

export default EventTicket;