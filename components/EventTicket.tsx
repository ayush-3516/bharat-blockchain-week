import React from 'react';

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

const EventTicket = (
    {
        date, start, end, eventOrganizer, content, tags, price, location, registrationLink
    }: Props
) => {

    const dateWords = date.split(' ');

    // Take the first two words for .num and .date
    const num = dateWords[0];
    const month = dateWords[1];

    const getRandomColor = () => {
        // Generate a random color in hexadecimal format
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="ticket">
            <div className="ticket-right">
                <h2 className="num">{num}</h2>
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

                <div className="sce flex items-center justify-center">
                    <div className="icon">
                        <i className="fa fa-table"></i>
                    </div>
                    <p className='leading-relaxed' >{date} <br /> {start} - {end}</p>
                </div>
                <div className="fix"></div>
                <div className="loc flex items-center my-2">
                    <div className="icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <p className='leading-relaxed'>{location}</p>
                </div>
                <div className="fix"></div>
                <button className="tickets bg-gradient-to-br from-orange-500 to-[#ff4e00] rounded-full px-[32px] py-2">Register</button>
            </div>
        </div>
    );
};

export default EventTicket;