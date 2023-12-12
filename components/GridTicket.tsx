import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface GridTicketProps {
    date: string;
    startTime: string;
    endTime: string;
    title: string;
    tags: string[];
    entry: string;
    location: string;
    registrationLink: string;
    posterUrl: string;
}

const GridTicket: React.FC<GridTicketProps> = ({
    date,
    title,
    tags,
    entry,
    registrationLink,
    posterUrl,
}) => {
    if (!date) {
        return null;
    }

    const startDateObject = new Date(date);
    const formattedStartDate = startDateObject.toLocaleDateString('en-US', {
        month: 'long',
    });

    return (
        <div className='grid'>
            <div className="ticket">
                <div className="ticket-left">
                    <div className="location">
                    </div>
                    <div className="date">
                        <h2 className="num">{startDateObject.getDate()}</h2>
                        <p className="day">{formattedStartDate}</p>
                    </div>
                </div>

                <div className="ticket-right">
                    <div className="flex items-center" id="ticket-item">
                        <div className="w-full overflow-hidden rounded-lg" id="ticket-img">
                            {posterUrl ? (
                                <Image src={posterUrl} alt={title} width="360px" height="360px" className=" object-contain rounded-2xl" />
                            ) : (
                                <Image src="/feature1.png" alt="Placeholder" width="360px" height="360px" />
                            )}
                        </div>
                        <div className="flex-grow" id="ticket-desc">
                            <div className="flex items-center justify-between" id="ticket-inner">
                                <div className="space-y-3">
                                    <h2 className="text-[20px] text-white">{title.split(' ').slice(0, 3).join(' ')}</h2>
                                    <div className="flex items-start space-x-4">
                                        {/* <div className="flex items-start justify-center">
                                            <div className="icon mr-2">
                                                <i className="fa fa-table text-xs font-light text-[#CACACA]"></i>
                                            </div>
                                            <p className="leading-relaxed text-sm font-light text-[#CACACA]">
                                                {formattedStartDate} <br /> {startTime} - {endTime}
                                            </p>
                                        </div> */}
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
                                        <p className="leading-relaxed text-sm font-light my-[2px] text-[#CACACA]">Bengaluru</p>
                                    </div>
                                </div>
                                <Link href={`${registrationLink}`}>
                                    <a className="bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white font-light uppercase rounded-full px-[32px] py-2">
                                        Register
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridTicket;
