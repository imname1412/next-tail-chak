import React, { useState, useEffect} from 'react'
import LabCard from './Labcard'
import { LabAll , endAll } from '../constant/LabName'
import LabOption from './LabOption';

import ReactLoading from 'react-loading';


import { Button, Badge } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText , Box } from '@chakra-ui/react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const TempHumid = () => {
  const [labArr, setlabArr] = useState({})
  const [specLab, setSpecLab] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOption, setIsOption] = useState(false)

  const fetchQad = async (lab) => {
    

    if(isOption){
      
      setIsLoading(true)
      const req = await fetch(`${process.env.NEXT_PUBLIC_HOST_DEV_MODE}/api/qad/month?format=json`)
      const data = await req.json()

      setlabArr(data)
      setTimeout(() => {setIsLoading(false)} ,500)
    }
    else{
      setIsLoading(true)
      const req = await fetch(`${process.env.NEXT_PUBLIC_HOST_PRIMARY}/qad/api/${lab}/?format=json`)
      const data = await req.json()

      console.log(data)
      setlabArr(data)
      setTimeout(() => {setIsLoading(false)} ,500)
    }
    
    
  }

  const handleChange = (e) => {
    
    const buffer = e.target.value
    
    fetchQad(buffer)
  }

  useEffect(() => {
    fetchQad('gc')
    console.log(process.env.NEXT_PUBLIC_HOST_DEV_MODE)
    console.log(process.env.NEXT_PUBLIC_HOST_PRIMARY)

  }, [])

  

  return (
    <div className='border rounded-lg shadow-lg flex flex-col w-full mx-2 my-2 gap-5 h-auto'>
      <div className='w-full flex flex-col gap-2 mt-2'>

      <div className='flex space-x-1 justify-start items-start pl-4'>
        
          <Button
            colorScheme='blue'
            onClick={() => {
              setIsOption(false)
            }}
            
          >Real-Time</Button>
        
          <Button
            colorScheme='blue' 
            onClick={() => {
              setIsOption(true)
            }}
          >Option
          </Button>

      </div>



      <Divider orientation='horizontal' />

      {isOption ? (
        <LabOption labdata={labArr} fetch={fetchQad} isLoading={isLoading}/>
      )
      :
      (
        <>
          <div className='mx-4 mt-1 mb-3 p-1 w-/6 md:w-1/8 lg:w-2/12  border rounded-lg shadow-lg'>
            <Badge className='mb-2 mt-1' colorScheme='purple'>Select Lab</Badge>
            <Select 
              // placeholder='-'
              bg='white' 
              onChange={handleChange}
            >
              {endAll.map((lab , index) => (
                <option key={index} value={lab}>{lab.toUpperCase()}</option>
              ))
              }
            </Select>
          </div>


          {isLoading ? (
            <div className='flex w-full h-screen items-center justify-center'>
              <ReactLoading 
                type='bars' 
                color='#3b82f6' 
                height={'60px'} 
                width={'60px'} 
              />
            </div>
          )
          :
          <>
            {Object.keys(labArr).length > 0 && labArr.mode !== 'options' ? 
            <div className='mx-4 h-auto pb-4 sm:px-4 '>
              <LabCard isActive='Active' labdata={labArr} />
            </div>
            :
            <Box padding='6' boxShadow='lg' bg='white' className='h-auto rounded-lg my-5 mx-5'>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
          }
          </>
          }
        
        </>
      )
    }
      </div>

    </div>
  )
}

export default TempHumid