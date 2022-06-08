import React , { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import LabcardOption from './LabcardOption'
import ReactLoading from 'react-loading';


const LabOption = ({labdata , fetch , isLoading}) => {

  return (
    <div className='h-screen'>
        <div className='mx-4 mb-2 border rounded-lg shadow-lg w-auto p-2'>
            <Badge className='mb rounde-sm' colorScheme='green'>Select Your desired timeframe</Badge>
            <div className='flex gap-2'>
            <Tooltip placement='right-start' hasArrow label='TF Day' shouldWrapChildren mt='3'>
              <Button 
                colorScheme='gray'
                onClick={fetch}  
              >Month</Button>
            </Tooltip>
            {/* <Tooltip placement='right-start' hasArrow label='Option TimeFrame' shouldWrapChildren mt='3'>
              <Button colorScheme='gray'>Day</Button>
            </Tooltip> */}
            
            </div>
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
          <div>
            <LabcardOption isActive='Active' labdata={labdata}  />
          </div>
          }
        

        
    </div>
  )
}

export default LabOption

