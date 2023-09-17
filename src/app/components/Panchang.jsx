/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import axios from 'axios';
const Panchang = async () => {
  // let response=null;
  // const options = {
  //   method: 'POST',
  //   url: 'https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/basic_panchang/',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '29777a572cmsh3bc9bf129cf68aep1ee7adjsn6c86db092c04',
  //     'X-RapidAPI-Host': 'vedicrishi-horoscope-matching-v1.p.rapidapi.com'
  //   },
  //   data: {
  //     day: '14',
  //     month: '09',
  //     year: '2023',
  //     hour: '10',
  //     min: '20',
  //     lat: '25.123',
  //     lon: '82.34',
  //     tzone: '5.5'
  //   }
  // };

  // try {
  // 	response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }
  return (
    <div className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-[350px] h-[400px] bg-gradient-to-r from-teal-400 to-yellow-200 rounded-xl my-[10px] py-[10px] font-Kalam'>
      <h1 className=' underline decoration-wavy font-Yanone xs:text-base md:text-lg text-red-900'>Todays's Panchang..</h1>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Today is
        {/* {` ${response.data.day}`}. */}
        </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Tithi:
        {/* {` ${response.data.tithi}`} */}
      </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Nakshatra:
        {/* {`$ {response.data.nakshatra}`} */}
      </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Yog:
        {/* {` ${response.data.yog}`} */}
      </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Karan:
        {/* {` ${response.data.karan}`} */}
      </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Sunrise:
        {/* {` ${response.data.sunrise} A.M.`} */}
      </h4>
      <h4 className='my-[10px] xs:text-base md:text-lg text-black'>
        Sunset:
        {/* {` ${response.data.sunset} P.M.`} */}
      </h4>
      </div>
  )
}

export default Panchang