import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaTemperatureLow } from 'react-icons/fa'
import { BsDroplet } from 'react-icons/bs'


const Carcard = ({isActive , temp , humid , loc}) => {
  return (
    <div className='card_lab relative bg-white shadow-lg '>
          <div className={`absolute top-2 right-2 rounded-full font-inter ${isActive === 'Active'? 'bg-blue-400':'bg-red-400'} text-white text-sm w-[50px] h-[50px] flex items-center justify-center`}>
            {isActive}
          </div>
          <div className='flex items-center'>
            <HiOutlineLocationMarker />
            <span className='ml-1'>Car A</span>
          </div>
          <p className='text-sm text-gray-500'>location: {loc} </p>
          <div className='flex justify-start items-center w-full my-1'>
            <p className='font-bold text-sm mr-2 bg-amber-400 text-white p-1 rounded-md flex items-center gap-1'>
              <FaTemperatureLow /> {temp} °C
            </p>
            <p className='font-bold text-sm bg-cyan-500 text-white p-1 rounded-md flex items-center gap-1'>
              <BsDroplet /> {humid} %RH
            </p>
          </div>
          <div className='flex flex-wrap gap-2 space-x-auto space-y-auto text-sm sm:text-lg'>
            <div className='border-2 rounded-md p-2 border-slate-300'>
              <h3>ERASPEC</h3>
              <h4>...Value</h4>
            </div>
            <div className='border-2 rounded-md p-2 border-slate-300'>
              <h3>ERAFLASH</h3>
              <h4>...Value</h4>
            </div>
            <div className='border-2 rounded-md p-2 border-slate-300'>
              <h3>MICRO DIST</h3>
              <h4>...Value</h4>
            </div>
            <div className='border-2 rounded-md p-2 border-slate-300'>
              <h3>XRF Spectrometer</h3>
              <h4>...Value</h4>
            </div>
          </div>
        </div>
  )
}

export default Carcard