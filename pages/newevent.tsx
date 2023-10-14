import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define an interface for the data structure
interface EventData {
    id: string;
    fields: {
        'End Date': number;
        Link: string;
        'Event Name': string;
        'Event Type': string[];
        Price: string;
        'Start Date': number;
        Date: string;
        Content: string;
        Location: string;
    };
}

const NewEvent = () => {
    const [data, setData] = useState<EventData[]>([]); // Initialize the state with the type

    useEffect(() => {
        // Simulate fetching data (replace with your actual API endpoint)
        const fetchData = async () => {
            try {
                // Replace this with your actual API endpoint
                const response = await axios.get('/api/airtable');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-400 body-font">
            <div className="mx-auto">
                
                <div className='py-6'>
                    {data.map(item => (
                        <div key={item.id}>
                            <h2>{item.fields['Event Name']}</h2>
                            <p>Date: {item.fields.Date}</p>
                            <p>Location: {item.fields.Location}</p>
                            <p>Event Type: {item.fields['Event Type'].join(', ')}</p>
                            <p>Price: {item.fields.Price}</p>
                            <p>Link: {item.fields.Link}</p>
                            <p>Content: {item.fields.Content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewEvent;
