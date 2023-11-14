import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './Checkout.module.css';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface InputProps {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Reusable Input component
const Input: React.FC<InputProps> = ({ type, id, name, placeholder, value, onChange }) => (
    <div className="relative mb-4">
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-orange-500 rounded border border-gray-600 focus:border-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
    </div>
);

const Checkout = () => {
    const router = useRouter();
    const { price } = router.query;
    const calculatedPrice = price ? parseFloat(price as string) : 0;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        hash: '',
        walletAddress: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Customize this function to handle the form submission, e.g., send data to a server
        console.log('Form submitted:', formData);
        toast.success("Form submitted !! Will get back to you shortly!");

        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            hash: '',
            walletAddress: '',
        });
    };

    return (
        <Layout>
            <div className="py-24">
                <div className="container px-5 py-12 mx-auto ">
                    <div className="flex items-center justify-between">
                        <div className={`px-2 py-12 w-[500px] mx-auto ${styles.glassmorphism}`}>
                            <div className="text-white space-y-2 flex flex-col items-center justify-center">
                                <h1 className="font-medium mb-2 text-[24px]">Your Checkout Page</h1>
                                <div className="w-12 h-1 bg-orange-400 rounded mt-2 mb-4"></div>
                                <div className="max-w-[600px]">
                                    <Image src="/qr.png" width={300} height={300} />
                                </div>
                                <p className="text-[40px] mb-3 text-orange-400">${calculatedPrice}</p>
                                {/* Add the rest of your checkout page content here */}
                            </div>
                        </div>
                        <div className="flex-grow pl-20">
                            <h2 className="text-white text-[28px] font-medium mb-5">
                                Once Paid!, Fill Your Info, so that we can Verify
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    id="hash"
                                    name="hash"
                                    placeholder="Trnx Hash"
                                    value={formData.hash}
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    id="walletAddress"
                                    name="walletAddress"
                                    placeholder="Wallet Address"
                                    value={formData.walletAddress}
                                    onChange={handleChange}
                                />
                                <button className="text-white bg-gradient-to-tr from-orange-500 to-orange-400 border-0 py-2 px-8 focus:outline-none rounded text-lg">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="flex w-full mb-4 flex-wrap">
                            <h1 className="sm:text-3xl text-2xl font-medium text-white lg:mb-0 mb-4">
                                Contact (in case any issues!)
                            </h1>
                        </div>
                        <div className="flex lg:flex-row md:flex-col text-gray-300">
                            <button className="bg-[#202020] inline-flex py-3 px-5 rounded-lg items-center hover:text-white focus:outline-none">
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-lg text-gray-400">1111100000</span>
                                </span>
                            </button>
                            <button className="bg-[#202020] inline-flex py-3 px-5 rounded-lg items-center hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-lg text-gray-400">xyz@gmail.com</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
