import React from 'react'
import CarCard from './Carcard'

const SectionB = () => {
  return (
    <div className='text-xl select-none mt-5 h-auto'>
      <div className='flex gap-5 flex-wrap mx-2 my-2 justify-center'>
        <CarCard isActive='Active' temp='25.94' humid='72.38' />
        <CarCard isActive='Offline' loc='235 bkk test road' />
        <CarCard isActive='Active' />
        <CarCard isActive='Active' />
        <CarCard isActive='Offline' />
        <CarCard isActive='Active' />
      </div>
    </div>
  )
}

export default SectionB