import EventForm from 'components/Form';
import Layout from 'components/Layout';
import React from 'react';

const CreateEvent = () => {
  return (
    <Layout>
      <div className="text-white flex flex-col justify-center gap-y-4 py-12 w-full items-center   ">
        <h1 className="font-medium text-4xl text-center">
          {' '}
          <span className="text-orange-500">Create</span> Event
        </h1>
        <p className=' text-xl mb-4'>Fill the given form to get listed!</p>
        <EventForm />
      </div>
    </Layout>
  );
};

export default CreateEvent;
