import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const News = () => {
    const [newsSelected, setNewsSelected] = useState('init')

    const NewsSwap = (news) => {
        switch(news){
            case 'init':
                return (
                    <img className='rounded-md w-full' src="https://mkpcdn.com/profiles/f7f07d33003eb87160c904b79f4fe348.jpg" alt="img" />
                )
            case 'sec':
                return (
                    <img className='rounded-md w-ful' src="https://uploads-ssl.webflow.com/61c0120d981c8f9d9322c0e0/61ca497efc91881256158064_blog%20article.png" alt="img" />
                )
            case 'third':
                return (
                    <img className='rounded-md w-ful' src="https://static.coincodex.com/en/resources/images//admin/news/sothebys-auction-fo/bayc-example.jfif" alt="img" />
                )
        }
    }

  return (
      <div className='w-full h-screen flex justify-center items-center px-2 py-2'>

          <motion.div
            initial={{opacity:0 }}
            whileInView={{opacity: 1 , y:[100 , 0]}}
            transition={{duration: 0.5}}
            className='flex relative p-2 text-2xl md:text-4xl'
          >
            <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            // fontSize='2xl'
            fontWeight='extrabold'
            >
                Welcome to Cal-Web
            </Text>
            <span className='text-2xl absolute -top-5 right-0'>🚀</span>
          </motion.div>

        {/* <div className='-z-10 flex flex-col w-full h-full gap-2'>
          <img className='flex-1' src="https://orapiweb1.pttor.com/uploads/editor/images/20201209_030834_8515.jpg" alt="" />
          <img className='flex-1' src="https://orapiweb1.pttor.com/uploads/editor/images/20201209_030902_6323.jpg" alt="" />
        </div> */}

    </div>
    // <div className='flex flex-col mx-5 gap-2 my-2 h-screen w-full'>
    //     <div className='flex gap-2 flex-col sm:flex-row'>
    //         <button
    //         className='bg-blue-500 hover:bg-blue-400 text-left p-2 rounded-md text-white'
    //           onClick={() => setNewsSelected('init')}
    //         >แจ้งซ่อม</button>
    //         <button
    //         className='bg-blue-500 hover:bg-blue-400 text-left p-2 rounded-md text-white'
    //           onClick={() => setNewsSelected('sec')}
    //         >สอบเทียบช่วงเวลาใด</button>
    //         <button
    //         className='bg-blue-500 hover:bg-blue-400 text-left p-2 rounded-md text-white'
    //           onClick={() => setNewsSelected('third')}
    //         >ขั้นตอนการส่งสอบเทียบ</button>
    //     </div>

    //     <div className='w-full rounded-md'>
    //         {NewsSwap(newsSelected)}
    //     </div>
    // </div>
  )
}

export default News