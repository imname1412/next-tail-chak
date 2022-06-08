import React, { useState, useEffect } from 'react'
// ? ICON ###
import { AiOutlineDotChart } from 'react-icons/ai'
import { FaShuttleVan } from 'react-icons/fa'
import { RiArrowGoBackLine} from 'react-icons/ri'
import { BiNews } from 'react-icons/bi'

import SectionA  from '../components/SectionA'
import SectionB  from '../components/MobileCar'
import { News, TempHumid } from '../components'

import { useColorMode } from '@chakra-ui/react'
import { Button, Badge } from '@chakra-ui/react'


import { FaMoon  , FaGithub , FaCarSide} from "react-icons/fa"
import { BsFillSunFill } from 'react-icons/bs'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()


  const [selectContent, setSelectContent] = useState('news')

  const Content = (sel) => {
    switch(sel){
      case 'news':
        return <News />
        break
      case 'mobile':
        return <SectionB />
        break
      case 'temphumid':
        return <TempHumid />
        break
    }
  }

  

  return (
    <div className="App flex">
      

      <div className='bg-[#23272A] fixed bottom-0 left-0 top-0 w-24 
        flex flex-col items-center justify-between pb-5
        rounded-tr-3xl
        '>
          <div className='flex flex-col items-center space-y-5 pt-5'>
            <div className='menu-link' onClick={() => setSelectContent('news')}>
              <BiNews className='w-7 h-7' color='#F7FAFC' />
            </div>
          
          
            <div className='menu-link relative' onClick={() => setSelectContent('temphumid')}>
              <AiOutlineDotChart className='w-7 h-7' color='#F7FAFC' />
                <Badge  
                  className='absolute top-0 -right-2'
                  fontSize='10px' colorScheme='red'>Beta
                </Badge>
            </div>
          
          
            <div className='menu-link' onClick={() => setSelectContent('mobile')} >
              <FaCarSide className='w-7 h-7' color='#F7FAFC' />
            </div>
          
          
            <div className='menu-link' onClick={() => window.open( 'http://172.18.131.107:8000/cal/calNav/')}>
              {/* <RiArrowGoBackLine 
                className='w-7 h-7' 
                color='#F7FAFC' 
              /> */}
              <div className='text-white h-7 w-7'>
                CAL
              </div>
            </div>
          </div>
          
          <div className='flex flex-col justify-evenly gap-5 items-center'>
            <FaGithub color='white' size={20} className='cursor-pointer transition-all hover:scale-125' />
            <Badge>v 0.0.1</Badge>
          </div>
          
      </div>


      <div className='pl-24 w-full h-full  flex items-center justify-center'>
          {Content(selectContent)}
      </div>


    </div>
  )
}
