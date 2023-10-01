import React from 'react';

type TeamMemberProps = {
    name: string;
    role: string;
    imageSrc: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => (
    <div className="p-5 lg:w-1/5 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-3xl w-60 h-52 object-cover border-4 border-[#a855f7] shadow-md shadow-purple-200 object-center mb-4" src={imageSrc} />
            <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                <h3 className="text-gray-500 mb-3">{role}</h3>
                <div className="inline-flex">
                    <a className="text-gray-500" href=''>
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a className="mx-3 text-gray-500" href=''>
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

type Props = {};

const Team: React.FC<Props> = () => {
    const teamMembers = [
        {
            name: 'Holden Caulfield',
            role: 'UI Designer',
            imageSrc: 'https://dummyimage.com/200x200',
        },
        {
            name: 'Alper Kamu',
            role: 'Designer',
            imageSrc: 'https://dummyimage.com/201x201',
        },
        {
            name: 'Atticus Finch',
            role: 'UI Developer',
            imageSrc: 'https://dummyimage.com/202x202',
        },
        {
            name: 'Henry Letham',
            role: 'Designer',
            imageSrc: 'https://dummyimage.com/203x203',
        }, {
            name: 'Holden Caulfield',
            role: 'UI Designer',
            imageSrc: 'https://dummyimage.com/200x200',
        },
        {
            name: 'Alper Kamu',
            role: 'Designer',
            imageSrc: 'https://dummyimage.com/201x201',
        },
        {
            name: 'Atticus Finch',
            role: 'UI Developer',
            imageSrc: 'https://dummyimage.com/202x202',
        },
        {
            name: 'Henry Letham',
            role: 'Designer',
            imageSrc: 'https://dummyimage.com/203x203',
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-36 pt-24 pb-12 mx-auto" id='speakers'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-semibold title-font mb-4 text-gray-900">OUR <span className="text-purple-500">SPEAKERS</span></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center -m-5">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
