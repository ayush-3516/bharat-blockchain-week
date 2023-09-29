import React, { useState, useEffect } from 'react';
import SearchComponent from 'components/SearchComponent'; // Replace with actual path
import axios from 'axios';

const Bounty = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('/api/airtable')
      .then(res => { 
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const filteredData = data.filter((item: any) =>
    item.fields.Platform?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.fields.Website?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="text-gray-400 body-font">
      <div className="mx-auto">
        <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className='py-6'>
          {/* <p className='mb-4'>
            {filteredData.length} results found.
          </p> */}
          {/* <div className="flex flex-wrap items-center justify-center -m-4">
            {
              filteredData.map((item: any) => (
                <div className="xl:w-1/4 md:w-1/2 w-full p-4" key={item.id}>
                  <div className="bg-[#101010] h-28 p-6 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font capitalize mb-2">{item.fields.Platform}</h2>
                    <p className="leading-relaxed text-base">{item.fields.Website}</p>
                  </div>
                </div>
              ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Bounty;
