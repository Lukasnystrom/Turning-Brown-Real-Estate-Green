import React, { useState } from 'react';
import Modal from 'react-modal';
import HouseDetails from './HouseDetails'; // Import the HouseDetails component

const HouseGrid = () => {
  const [houses, setHouses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newHouse, setNewHouse] = useState({photo: '', name: '', address: '', city: '', country: '', tasks: ''});
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;
  
    if (name === 'tasks') {
      // Handle tasks
      value = value.split('\n');
      setNewHouse({ ...newHouse, [name]: value });
    } else {
      // Handle other inputs
      setNewHouse({ ...newHouse, [name]: value });
    }
  };

  const addHouse = () => {
    setHouses([...houses, newHouse]);
    setNewHouse({photo: '', name: '', address: '', city: '', country: '', tasks: ''});
    closeModal();
  };

  const searchHouse = (event) => {
    // Add logic to search for a house
    setSearchTerm(event.target.value);
  };

  const [selectedHouse, setSelectedHouse] = useState(null);

  const selectHouse = (house) => {
      setSelectedHouse(house);
  };

  return (
    <div className="container mx-auto mt-4 p-4 rounded h-[1000px] overflow-auto bg-slate-400">
      <div className="flex justify-between my-4">
        <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
          Add
        </button>
        <input onChange={searchHouse} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search"/>
      </div>
      <div className="grid grid-cols-6 gap-4">
  {houses.filter((house) => {
    return house.name.toLowerCase().includes(searchTerm.toLowerCase()) || house.address.toLowerCase().includes(searchTerm.toLowerCase()) || house.city.toLowerCase().includes(searchTerm.toLowerCase()) || house.country.toLowerCase().includes(searchTerm.toLowerCase());
    }).map((house, index) => (
      <div key={index} className="rounded overflow-hidden shadow-lg p-4 bg-white h-[250px]" onClick={() => selectHouse(house)}>
        <img className="w-full h-[140px]" src={house.photo} alt="House"/>
        <div className="font-bold text-sm mt-2 mb-2">{house.name}</div>
        <p className="text-gray-700 text-base">{house.address}</p>
        <p className="text-gray-700 text-base">{house.city}, {house.country}</p>
      </div>
    ))}
  </div>
      <Modal isOpen={selectedHouse !== null} onRequestClose={() => setSelectedHouse(null)}>
        <HouseDetails house={selectedHouse} />
      </Modal>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className='w-[400px]'>
          <h2>Add a new house</h2>
          <input name="photo" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Photo URL"/>
          <input name="name" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name"/>
          <input name="address" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Address"/>
          <input name="city" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="City"/>
          <input name="country" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Country"/>
          <textarea name="tasks" onChange={handleInputChange} className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tasks (one per line)"></textarea>
          <button onClick={addHouse} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add House
          </button>
        </div>
       
    </Modal>
    </div>
  );
};

export default HouseGrid;
