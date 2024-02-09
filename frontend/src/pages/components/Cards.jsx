import React from 'react';
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-green-200'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto ' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Personal</h2>
              <p className='text-center text-4xl font-bold'>$19</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 Certification</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>5 Upploads a month</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Business</h2>
              <p className='text-center text-4xl font-bold'>$49</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>2 Certifications</p>
                  <p className='py-2 border-b mx-8'>50 Granted User</p>
                  <p className='py-2 border-b mx-8'>20 Upploads a month</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
              <p className='text-center text-4xl font-bold'>$79</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>5+ Certifications</p>
                  <p className='py-2 border-b mx-8'>100 Granted User</p>
                  <p className='py-2 border-b mx-8'>50 Upploads a month</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;