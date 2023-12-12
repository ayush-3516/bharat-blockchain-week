import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Define the type for your form state
type FormData = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  organizer: string;
  description: string;
  category: string;
  location: string;
  locationUrl: string;
  posterUrl: string;
  organizerContact: string;
  entry: string;
};

// Define placeholder values for each input
const placeholderValues: Record<keyof FormData, string> = {
  title: 'name of event',
  date: 'Enter event date',
  startTime: 'Enter start time',
  endTime: 'Enter end time',
  organizer: 'Enter event organizer',
  description: 'Enter event description',
  category: 'Enter event category',
  location: 'Enter event location',
  locationUrl: 'Enter location URL',
  posterUrl: 'Enter poster URL',
  organizerContact: 'Enter organizer contact',
  entry: 'Enter entry details',
};

const EventForm: React.FC = () => {
  const url = 'https://blockchain-bharat-production.up.railway.app/api/events/';
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    organizer: '',
    description: '',
    category: '',
    location: '',
    locationUrl: '',
    posterUrl: '',
    organizerContact: '',
    entry: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios.post(url, formData).then((res) => {
      console.log(res);
    });

    toast('Hello Darkness!',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    
    console.log(formData);
  };

  return (
    <div className="bg-[#131313] p-5 w-[80vw] md:w-[45vw] rounded-lg text-white">
      <form onSubmit={handleSubmit} className="space-y-4 py-4 px-2">
        <div className='mb-6'>
          <h2 className="text-2xl font-medium mb-4 text-orange-500">Create New Event</h2>
          <div className="h-1 w-20 bg-orange-500 rounded"></div>
        </div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className='mb-3'>
            <label htmlFor={key} className="block mb-2 text-lg capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </label>
            <input
              type="text"
              name={key}
              id={key}
              value={value}
              onChange={handleChange}
              placeholder={placeholderValues[key as keyof FormData]}
              className="w-full p-2 bg-[#202020] rounded border border-[#252525] focus:border-orange-500 text-white"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full p-3 text-xl bg-orange-500 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
