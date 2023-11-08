import React, { useState, FormEvent } from 'react';

// Define the type for your form state
type FormData = {
  title: string;
  date: string;
  startDate: string;
  endDate: string;
  organizer: string;
  description: string;
  category: string;
  location: string;
  locationUrl: string;
  posterUrl: string;
  organizerContact: string;
  entry: string;
};

const EventForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: '',
    startDate: '',
    endDate: '',
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
    // Handle the submission to your API
    console.log(formData);
  };

  return (
    <div className="bg-gray-800 p-5 w-[80vw] md:w-[45vw] rounded-lg text-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg font-bold text-orange-500">Create New Event</h2>

        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="block mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </label>
            <input
              type="text"
              name={key}
              id={key}
              value={value}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-orange-500 text-white"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full p-3 bg-orange-500 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
