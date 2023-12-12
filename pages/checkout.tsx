import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './Checkout.module.css';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import axios from 'axios';

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
            className="w-full bg-[#141414] focus:bg-transparent focus-within:bg-transparent focus:ring-2 focus:ring-orange-500 rounded text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
    </div>
);

const Checkout = () => {
    const router = useRouter();
    const { price } = router.query;
    const calculatedPrice = price ? parseFloat(price as string) : 0;

    const [formData, setFormData] = useState({
        link: '',
        name: '',
        email: '',
        txnHash: '',
        walletAddress: '',
        blockchain: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        try {
            const response = await axios.post('https://blockchain-bharat-production.up.railway.app/api/ads/', formData);
            console.log('Server responded', response.data);
            toast.success("Form submitted !! Will get back to you shortly");

            // Reset the form after submission
            setFormData({
                link: '',
                name: '',
                email: '',
                txnHash: '',
                walletAddress: '',
                blockchain: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.');
        }
    };

    return (
        <Layout>
            <div className={`py-24 ${styles.checkout}`}>
                <div className="container px-5 py-12 mx-auto ">
                    <div className={`flex items-center justify-between ${styles.checkContainer}`} >
                        <div className={`px-2 py-12 w-[500px] mx-auto ${styles.glassmorphism}`}>
                            <div className="text-white space-y-2 flex flex-col items-center justify-center">
                                <h1 className=" font-normal mb-2 text-[20px]">Only EVM and stablecoins accepted</h1>
                                <div className="max-w-[600px] overflow-hidden">
                                    <Image src="/qr.png" alt="qr" className='rounded-lg' width={300} height={300} />
                                </div>
                                <p className="text-[28px] mb-3 text-center w-full text-orange-400"><span className="text-white">Price:</span>  ${calculatedPrice}</p>
                                {/* Add the rest of your checkout page content here */}
                            </div>
                        </div>
                        <div className={`flex-grow ${styles.rightForm}`}>
                            <h2 className="text-white text-[28px] font-medium mb-5">
                                Once Paid!, Fill Your Info, so that we can Verify
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    type="text"
                                    id="link"
                                    name="link"
                                    placeholder="drive link of your ad"
                                    value={formData.link}
                                    onChange={handleChange}
                                />
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
                                    id="txnHash"
                                    name="txnHash"
                                    placeholder="Trnx Hash"
                                    value={formData.txnHash}
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
                                <Input
                                    type="text"
                                    id="blockchain"
                                    name="blockchain"
                                    placeholder="blockchain you transacted on ? "
                                    value={formData.blockchain}
                                    onChange={handleChange}
                                />
                                <button type='submit' className="text-white bg-gradient-to-tr from-orange-500 to-orange-400 border-0 py-2 px-8 focus:outline-none rounded text-lg">
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
                            <button className="bg-[#141414] inline-flex py-3 px-5 rounded-lg items-center hover:text-white focus:outline-none">
                                <span className="flex items-start flex-col leading-none">
                                    <span className="text-lg text-gray-300">+91 90549 07333</span>
                                </span>
                            </button>
                            <button className="bg-[#141414] inline-flex py-3 px-5 rounded-lg items-center hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                                <span className="flex items-start flex-col leading-none">
                                    <span className="text-lg text-gray-300">admin@web3events.in</span>
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
