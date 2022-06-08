import React, { useState, useEffect} from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaTemperatureLow } from 'react-icons/fa'
import { BsDroplet } from 'react-icons/bs'
import { Line } from 'react-chartjs-2';
// import { options , options2 } from './ChartSetting'

export const options = {
  maintainAspectRatio: false,
  // pointStyle: 'dash',
  animation: false,
  pointRadius: 0 ,
  plugins: {
    legend: {
      // position: 'top',
      display: false,
    },
    title: {
      display: true,
      text: 'Temp',
    },
  },
  scales:{
      xAxis:{
          display: true
      },
      yAxis:{
          display: true
      },
  },
};


const LabcardOption = ({isActive , labdata}) => {

  const dataTemp = {
    labels: labdata?.monthFill?.dateFill,
    datasets: [
      {
        // label: 'Dataset 1',
        data: labdata?.monthFill?.TempPerDay,
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
      // {
      //   data: labdata.T_upper_bound,
      //   borderColor: 'rgb(114, 108, 108)',
      //   backgroundColor: 'rgba(170, 82, 82, 0.5)',
      //   elements: {
      //     line: {
      //       borderWidth: 2,
      //       borderDash: [4 ,4]
      //     },
      //     point:{
      //       radius: 0,
      //       hitRadius: 0,
      //   }
      //   }
      // },
      // {
      //   data: labdata.T_lower_bound,
      //   borderColor: 'rgb(114, 108, 108)',
      //   backgroundColor: 'rgba(170, 82, 82, 0.5)',
      //   elements: {
      //     line: {
      //       borderWidth: 2,
      //       borderDash: [4 ,4]
      //     },
      //     point:{
      //       radius: 0,
      //       hitRadius: 0,
      //   }
      //   }
      // },
    ],
  };

  const dataHumid = {
    labels: labdata?.monthFill?.dateFill,
    datasets: [
      {
        // label: 'Dataset 2',
        data: labdata?.monthFill?.HumidPerDay,
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
      // {
      //   data: labdata.H_upper_bound,
      //   borderColor: 'rgb(114, 108, 108)',
      //   backgroundColor: 'rgba(170, 82, 82, 0.5)',
      //   elements: {
      //     line: {
      //       borderWidth: 2,
      //       borderDash: [4 ,4]
      //     },
      //     point:{
      //       radius: 0,
      //       hitRadius: 0,
      //   }
      //   }
      // },
      // {
      //   data: labdata.H_lower_bound,
      //   borderColor: 'rgb(114, 108, 108)',
      //   backgroundColor: 'rgba(170, 82, 82, 0.5)',
      //   elements: {
      //     line: {
      //       borderWidth: 2,
      //       borderDash: [4 ,4]
      //     },
      //     point:{
      //       radius: 0,
      //       hitRadius: 0,
      //   }
      //   }
      // },
    ],
  };


  return (
    <div className=' border rounded-lg shadow-lg relative border p-3 h-auto bg-white rounded-md h-auto hover:border-slate-500 '>
      <h1 className='ml-2'>LabName: 
        <span className='px-1 rounded-md ml-2 bg-gray-300'>
          Month
        </span>
      </h1>
      
        {/* <div className={`cursor-pointer absolute top-2 right-2 rounded-full font-inter ${isActive === 'Active'? 'bg-blue-400':'bg-red-400'} text-white text-sm w-[50px] h-[50px] flex items-center justify-center`}>
          {isActive === 'Active'? 'Active':'Offline'}
        </div> */}
      

      <div className='flex justify-start items-center w-full my-1 ml-2'>
            <p className='font-bold text-sm mr-2 bg-amber-400 text-white p-1 rounded-md flex items-center gap-1'>
              <FaTemperatureLow /> temp °C
            </p>
            <p className='font-bold text-sm bg-cyan-500 text-white p-1 rounded-md flex items-center gap-1'>
              <BsDroplet /> humid %RH
            </p>
      </div>

      <div className='flex flex-col items-center gap-2 lg:flex-row lg:justify-center'>
        <div className='relative h-[30vh] w-[65vw] sm:w-[70vw] sm:h-[40vh] 
        md:w-[70vw] md:h-[40vh] lg:w-[40vw] lg:h-[40vh]
        xl:w-[40vw] xl:h-[40vh]
        shadow-lg my-1 p-2 rounded-lg'>
          <Line options={options} data={dataTemp} />
        </div>
        <div className='relative h-[30vh] w-[65vw] sm:w-[70vw] sm:h-[40vh]
        md:w-[70vw] md:h-[40vh] lg:w-[40vw] lg:h-[40vh]
        xl:w-[40vw] xl:h-[40vh]
        shadow-lg my-1 p-2 rounded-lg'>
          <Line options={options} data={dataHumid} />
        </div>
      </div>

    </div>
  )
}

export default LabcardOption