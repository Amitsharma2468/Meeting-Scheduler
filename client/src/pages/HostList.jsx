import React from 'react';

const HostList = ({ setSelectedHost }) => {
  // Example data for host users
  const hosts = [
    { id: 1, name: 'John Doe', description: 'Software Engineer at Google' },
    { id: 2, name: 'Jane Smith', description: 'Product Manager at Amazon' },
    { id: 3, name: 'Ali Hossain', description: 'Tech Lead at Microsoft' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hosts.map((host) => (
        <div 
          key={host.id} 
          className="bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-green-50" 
          onClick={() => setSelectedHost(host)}
        >
          <h3 className="text-xl font-bold text-gray-900">{host.name}</h3>
          <p className="text-gray-600 mt-2">{host.description}</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View Slots
          </button>
        </div>
      ))}
    </div>
  );
};

export default HostList;
