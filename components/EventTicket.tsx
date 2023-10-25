import Image from 'next/image';
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
            <div className="ticket-left">
                <div className="location">
                    <p className=' font-light'>{location}</p>
                </div>
                <div className='date'>
                    <h2 className="num">{day}</h2>
                    <p className="day">{month}</p>
                </div>
            </div>

            <div className="ticket-right">
                <div className='flex items-center' id='ticket-item'>
                    <div className='w-[200px]' id='ticket-img'>
                        <Image src="/feature1.png" alt='feature' width={180} height={180} />
                    </div>
                    <div className='flex-grow' id='ticket-desc'>
                        <div className='flex items-center justify-between' id='ticket-inner'>
                            <div className='space-y-3'>
                                <h2 className="text-[20px] text-white">{eventOrganizer}</h2>
                                <div className="flex items-start space-x-4">
                                    <div className="flex items-start justify-center">
                                        <div className="icon mr-2">
                                            <i className="fa fa-table text-xs font-light text-[#CACACA]"></i>
                                        </div>
                                        <p className='leading-relaxed text-sm font-light text-[#CACACA]' >{date} <br /> {startTime24H} - {endTime24H}</p>
                                    </div>
                                    <div className="sce flex items-center">
                                        <div className="icon mr-2">
                                            <i className="far fa-tags text-xs font-light text-[#CACACA]"></i>
                                        </div>
                                        <p className='leading-relaxed text-sm font-light text-[#CACACA]'>{price}</p>
                                    </div>
                                </div>
                                <div className=' space-x-2'>
                                    {tags.length > 0 &&
                                        tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="tag rounded-full px-4 py-1 text-black bg-green-200"
                                            >
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="loc flex items-start ">
                                    <div className="icon mr-2">
                                        <i className="far fa-map-marker-alt text-[#CACACA] text-[12px]"></i>
                                    </div>
                                    <p className='leading-relaxed text-sm font-light my-[2px] text-[#CACACA]'>{location}</p>
                                </div>
                            </div>
                            <Link href={registrationLink}>
                                <a className="bg-[#1D1D1D] text-white font-light uppercase border-[1px] border-[#474747] rounded-full px-[32px] py-2">
                                    Register
                                </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTicket;