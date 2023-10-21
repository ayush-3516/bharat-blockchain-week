import React from 'react';

interface EventGridProps {
    eventTitle: string;
    eventLocation: string;
    eventDate: string;
    start: string;
    end: string;
    eventCategory: string;
    eventPrice: string;
    registrationLink: string;
}

const EventGrid: React.FC<EventGridProps> = ({
    eventTitle,
    eventLocation,
    eventDate,
    start,
    end,
    eventCategory,
    eventPrice,
    registrationLink,
}) => {
    const startTimeInSeconds = parseInt(start, 10);
    const endTimeInSeconds = parseInt(end, 10);

    const dateComponents = eventDate.split('-');
    const day = dateComponents[2];
    const month = getMonthName(dateComponents[1]);

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
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}`;
    };

    const startTime24H = formatTime(startTimeInSeconds);
    const endTime24H = formatTime(endTimeInSeconds);

    return (
        <div className="w-1/3 p-2">
            <div className='bg-white rounded-[5px] h-60 p-4'>
                <div className="flex mb-3">
                    <div className="tag rounded-lg px-4 py-1 text-black bg-green-200">
                        {eventCategory}
                    </div>
                </div>
                <h3 className="title font-medium text-[24px]">{eventTitle}</h3>
                <div className="flex items-center mt-1 space-x-2">
                    <InfoIcon iconClass="fa fa-table" text={eventDate} />
                    <InfoIcon iconClass="fa fa-tags" text={eventPrice} />
                </div>
                <InfoIcon iconClass="fa fa-map-marker" text={eventLocation} />
                <InfoIcon iconClass="fas fa-clock" text={`${startTime24H} - ${endTime24H}`} />
                <button className="bg-gradient-to-br from-orange-500 to-[#ff4e00] rounded-sm px-[32px] py-2 mt-3 text-white uppercase">
                    Register
                </button>
            </div>
        </div>
    );
};

interface InfoIconProps {
    iconClass: string;
    text: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ iconClass, text }) => (
    <div className="flex items-center">
        <i className={`${iconClass} text-xs mb-0 text-gray-700`}></i>
        <p className="text-[1rem] mx-1 mb-0 text-gray-700">
            {text}
        </p>
    </div>
);

export default EventGrid;
