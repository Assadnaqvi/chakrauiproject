'use client';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import Pricing from './Pricing';
import Features from './Features';
import React from 'react'



const page = () => {
  return (
    <ChakraProvider>
      <Header/>
<Pricing/>
<Features/>
    </ChakraProvider>
  )
}

export default page