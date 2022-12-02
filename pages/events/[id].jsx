import React from 'react'
import { useRouter } from 'next/router'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Button } from '@mui/material';


function EventDetail() {
  const router = useRouter(); 
  console.log(router.query.id);
  return (
    
      <div className='bg-green-400  text-white flex items-center justify-center space-y-10  w-full'>Programming for everyone
      <div className='bg-black ml-5 space-x-5   '> 
      <div className='text-white flex items-center justify-center flex-col p-5 gap-5 '>
      11/25/2022
     
      <AccountBalanceIcon />
      <div className='text-white flex items-center justify-center '>    SomeStreet 25, 12345 San Somewhereo

     
     
      
      
    </div>
      </div>
      
             </div>
             </div>

   
    
  )
}

export default EventDetail