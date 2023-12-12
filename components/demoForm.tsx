import React, { useState, FormEvent } from 'react';
import { toast } from 'react-hot-toast';

// Define the type for your form state
type FormData = {
    name: string;
    companyRole: string;
    typeOfEvent: string;
    estimatedBudget: number;
    phoneNumber: number;
    email: string;
    dateOfEvent: string;
    timeOfEvent: string;
    noOfPeopleExpected: number;
};

// Define placeholder values for each input
const placeholderValues: Record<keyof FormData, string> = {
    name: "Enter your name",
    companyRole: "CEO",
    typeOfEvent: "Hackathon/Workshop",
    estimatedBudget: "100",
    phoneNumber: "your phone number",
    email: "your email address",
    dateOfEvent: "your date of event",
    timeOfEvent: "your time of event",
    noOfPeopleExpected: "100",
};

const EventForm: React.FC = () => {
    // const url = 'https://blockchain-bharat-production.up.railway.app/api/events/';
    const [formData, setFormData] = useState<FormData>({
        name: '',
        companyRole: '',
        typeOfEvent: '',
        estimatedBudget: 0,
        phoneNumber: 0,
        email: '',
        dateOfEvent: '',
        timeOfEvent: '',
        noOfPeopleExpected: 0,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
        toast('Will get back to in 24 hrs !', { icon: '✅', });
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
                        {key === 'typeOfEvent' ? (
                            <select
                                name={key}
                                id={key}
                                value={value}
                                onChange={handleSelectChange}
                                className="w-full p-2 bg-[#202020] rounded border border-[#252525] focus:border-orange-500 text-white"
                                required
                            >
                                <option value="">Select Type of Event</option>
                                <option value="Hackathon/Workshop">Hackathon/Workshop</option>
                                <option value="Party">Party</option>
                                <option value="Networking">Networking</option>
                                <option value="Conference/Summit">Conference/Summit</option>
                                <option value="Dinner/Party">Dinner/Party</option>
                            </select>
                        ) : (
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
                        )}
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
