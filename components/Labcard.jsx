import React, { useState, useEffect} from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaTemperatureLow } from 'react-icons/fa'
import { BsDroplet } from 'react-icons/bs'
import { Line } from 'react-chartjs-2';
import { options , options2 } from './ChartSetting'

import { Divider , Badge} from '@chakra-ui/react'


const Labcard = ({isActive , labdata}) => {

  const dataTemp = {
    labels: labdata.times,
    datasets: [
      {
        // label: 'Dataset 1',
        data: labdata.tempArr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        elements: {
          line:{
              tension: 0,
              borderWidth: 3,
              // fill: "start",
          },
          point:{
              radius: 0,
              hitRadius: 0,
          }
      },
      },
      {
        data: labdata.T_upper_bound,
        borderColor: 'rgb(250, 199, 199)',
        backgroundColor: 'rgba(170, 82, 82, 0.5)',
        elements: {
          line: {
            borderWidth: 2,
            borderDash: [4 ,4]
          },
          point:{
            radius: 0,
            hitRadius: 0,
        }
        }
      },
      {
        data: labdata.T_lower_bound,
        borderColor: 'rgb(250, 199, 199)',
        backgroundColor: 'rgba(170, 82, 82, 0.5)',
        elements: {
          line: {
            borderWidth: 2,
            borderDash: [4 ,4]
          },
          point:{
            radius: 0,
            hitRadius: 0,
        }
        }
      },
    ],
  };

  const dataHumid = {
    labels: labdata.times,
    datasets: [
      {
        // label: 'Dataset 2',
        data: labdata.humidArr,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        elements: {
          line:{
              tension: 0,
              borderWidth: 3,
              // fill: "start",
          },
          point:{
              radius: 0,
              hitRadius: 0,
          }
      },
      },
      {
        data: labdata.H_upper_bound,
        borderColor: 'rgb(179, 219, 251)',
        backgroundColor: 'rgba(170, 82, 82, 0.5)',
        elements: {
          line: {
            borderWidth: 2,
            borderDash: [4 ,4]
          },
          point:{
            radius: 0,
            hitRadius: 0,
        }
        }
      },
      {
        data: labdata.H_lower_bound,
        borderColor: 'rgb(179, 219, 251)',
        backgroundColor: 'rgba(170, 82, 82, 0.5)',
        elements: {
          line: {
            borderWidth: 2,
            borderDash: [4 ,4]
          },
          point:{
            radius: 0,
            hitRadius: 0,
        }
        }
      },
    ],
  };


  return (
    <div className='relative  h-auto bg-white rounded-md'>

      <div className='relative border shadow-md rounded-md'>

        <h1 className='absolute -top-8 -left-2 px-2 py-2 pt-4 flex'>
          <Badge className='ml-1'  fontSize='1.1em'>{labdata.labname}</Badge>
        </h1>
        
        <div className='px-2 pt-5 pb-3 flex justify-center items-center w-full my-1'>
              <p className='py-2 flex-1 font-bold text-sm mr-2 bg-red-400 text-white p-1 rounded-md flex items-center gap-1'>
                <FaTemperatureLow /> {labdata.avg_T} °C
              </p>
              <p className='py-2 flex-1 font-bold text-sm bg-blue-400 text-white p-1 rounded-md flex items-center gap-1'>
                <BsDroplet /> {labdata.avg_H} %RH
              </p>
        </div>

        <Divider orientation='horizontal' className='my-2' />
      

        <div className=' py-2 flex flex-col items-center gap-2 

        lg:flex-row lg:justify-center
        '>
            <div className='relative h-[30vh] w-[65vw] 
            sm:w-[70vw] sm:h-[40vh] 
            md:w-[70vw] md:h-[40vh] lg:w-[40vw] lg:h-[40vh]
            xl:w-[40vw] xl:h-[40vh]
            my-1 p-2 rounded-lg'>
              <Line options={options} data={dataTemp} />
            </div>
            <Divider orientation='horizontal' className='my-2 md:hidden' />
            <div className='relative h-[30vh] w-[65vw] 
            sm:w-[70vw] sm:h-[40vh]
            md:w-[70vw] md:h-[40vh] lg:w-[40vw] lg:h-[40vh]
            xl:w-[40vw] xl:h-[40vh]
            my-1 p-2 rounded-lg'>
              <Line options={options2} data={dataHumid} />
            </div>
        </div>

      </div>

    </div>
  )
}

export default Labcard