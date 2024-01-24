import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'; // You might need to install react-bootstrap

const HouseDetails = ({ house }) => {
    return (
      <div>
        <h2>{house.name}</h2>
        <p>{house.address}, {house.city}, {house.country}</p>
        <ul>
          {house.tasks.map((task, index) => (
            <li className='flex items-center' key={index}><input className='mr-2' type="checkbox"/>{task}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HouseDetails;
